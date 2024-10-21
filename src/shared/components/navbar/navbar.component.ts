import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '../../store/auth/auth.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private store: Store, private cdr: ChangeDetectorRef, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.setAuthState();
  }

  private setAuthState(): void {
    this.store.select(isAuthenticated)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((authState: boolean) => {
        this.isLoggedIn = authState;
        this.cdr.detectChanges();
      });
  }
}
