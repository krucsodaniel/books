import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);
