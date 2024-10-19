import { IBook } from './book.model';

export interface IKind {
  items: IBook[];
  kind: string,
  totalItems: number,
}
