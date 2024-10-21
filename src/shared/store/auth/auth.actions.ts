import { createAction, props } from '@ngrx/store';

export const enum AuthAction {
  googleLogin = '[Auth] Google Login',
  googleLoginSuccess = '[Auth] Google Login Success',
  googleLoginFailure = '[Auth] Google Login Failure',

  logout = '[Auth] Logout',
  logoutSuccess = '[Auth] Logout Success',
}

export const googleLogin = createAction(AuthAction.googleLogin);

export const googleLoginSuccess = createAction(
  AuthAction.googleLoginSuccess,
  props<{ accessToken: string }>()
);

export const googleLoginFailure = createAction(
  AuthAction.googleLoginFailure,
  props<{ error: object }>()
);

export const logout = createAction(AuthAction.logout);
export const logoutSuccess = createAction(AuthAction.logoutSuccess);
