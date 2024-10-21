import { createReducer, on } from '@ngrx/store';
import { googleLoginFailure, googleLoginSuccess, logoutSuccess } from './auth.actions';

export interface AuthState {
  accessToken: string | null;
  error: object | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  accessToken: null,
  error: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,

  on(googleLoginSuccess, (state, { accessToken }) => ({
    ...state,
    accessToken,
    isAuthenticated: true,
    error: null,
  })),

  on(googleLoginFailure, (state, { error }) => ({
    ...state,
    accessToken: null,
    isAuthenticated: false,
    error,
  })),

  on(logoutSuccess, state => ({
    ...state,
    accessToken: null,
    isAuthenticated: false,
    error: null,
  }))
);
