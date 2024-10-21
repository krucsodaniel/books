import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { googleLogin, logout } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthButtonComponent {
  @Input() isLoggedIn = false;

  constructor(private store: Store) {}

  login(): void {
    this.store.dispatch(googleLogin());
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
