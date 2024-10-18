import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bookshelf-page',
  templateUrl: './bookshelf-page.component.html',
  styleUrl: './bookshelf-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookshelfPageComponent {

}
