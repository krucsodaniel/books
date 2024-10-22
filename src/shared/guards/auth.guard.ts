import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isAuthenticated } from '../store/auth/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(isAuthenticated)
      .pipe(
        map((authState: boolean) => {
          if (!authState) {
            this.router.navigate(['/']);
            return false;
          }
          return true;
        })
      );
  }
}
