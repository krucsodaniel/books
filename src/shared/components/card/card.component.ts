import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBook } from '../../models/book.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() book!: IBook;

  showBook(id: string): void {
    console.log('id: ', id);
  }

  addToFavorite(id: string): void {
    console.log('id: ', id);
  }
}
