import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Store } from '@ngrx/store';
import { searchBooks } from '../../store/book.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface ISearchForm {
  searchTerm: FormControl<string | null>,
  searchType: FormControl<string | null>,
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent implements OnInit {
  searchForm = new FormGroup<ISearchForm>({
    searchTerm : new FormControl<string>(''),
    searchType: new FormControl<'title' | 'author'>('title'),
  });

  get searchTermControl() {
    return this.searchForm.controls.searchTerm;
  }

  get searchType() {
    return this.searchForm.get('searchType')?.value;
  }

  constructor(private store: Store, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.listenToSearch();
  }

  private listenToSearch(): void {
    this.searchTermControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((searchTerm: string | null) => {
        if (searchTerm === null) {
          return '';
        }
        return this.onSearchInput(searchTerm);
      })
  }

  private onSearchInput(searchTerm: string): void {
    if (searchTerm.trim().length > 0) {
      this.store.dispatch(searchBooks({ searchTerm: searchTerm, searchType: this.searchType ?? '' }));
    }
  }
}
