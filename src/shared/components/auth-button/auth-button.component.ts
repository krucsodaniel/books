import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { googleLogin, logout } from '../../store/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthButtonComponent {
  @Input() isLoggedIn = false;
  @ViewChild('trigger') trigger!: ElementRef;
  isDropdownOpen = false;

  constructor(private store: Store, private router: Router, private cdr: ChangeDetectorRef) {}

  login(): void {
    this.store.dispatch(googleLogin());
  }

  logout(): void {
    this.store.dispatch(logout());
    this.closeDropdown();
  }

  clickOnTrigger(): void {
    if (this.isDropdownOpen) {
      this.closeDropdown()
    } else {
      this.openDropdown();
    }
  }

  clickOutsideOverlay(): void {
    this.closeDropdown();
  }

  navigate(): void {
    void this.router.navigate(['/bookshelf']);
    this.closeDropdown();
  }

  private openDropdown(): void {
    this.isDropdownOpen = true;
  }

  private closeDropdown(): void {
    this.isDropdownOpen = false;
    this.cdr.detectChanges();
  }
}
