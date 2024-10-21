import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OAuthService, OAuthEvent, OAuthErrorEvent, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { googleLogin, googleLoginSuccess, googleLoginFailure, logout, logoutSuccess } from './auth.actions';
import { EMPTY, from, iif } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private oAuthService: OAuthService,
    private router: Router
  ) {
  }

  listenOAuth$ = createEffect(() =>
    this.oAuthService.events.pipe(
      mergeMap((event: OAuthEvent) => {
        if (event instanceof OAuthErrorEvent) {
          return [googleLoginFailure({ error: event.reason })];
        }

        if (event instanceof OAuthSuccessEvent && event.type === 'token_received') {
          const accessToken = this.oAuthService.getAccessToken();
          return [googleLoginSuccess({ accessToken })];
        }

        return EMPTY;
      })
    )
  );

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(googleLogin),
      mergeMap(() =>
        iif(
          () => this.oAuthService.hasValidIdToken() && this.oAuthService.hasValidAccessToken(),
          [googleLoginSuccess({ accessToken: this.oAuthService.getAccessToken() })],
          from(this.oAuthService.loadDiscoveryDocumentAndLogin()).pipe(
            tap((result: boolean): void => {
              if (!result) {
                this.oAuthService.initCodeFlow();
              }
            }),
            mergeMap(() => EMPTY),
            catchError((error) => [googleLoginFailure({ error })])
          )
        )
      )
    )
  );

  logInSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(googleLogin),
        map(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  logInError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(googleLoginFailure),
        tap(() => {
          this.router.navigate(['no-access']);
        })
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          this.oAuthService.logOut();
          this.oAuthService.revokeTokenAndLogout();
          this.router.navigate(['/']);
        }),
        map(() => logoutSuccess())
      ),
  );
}
