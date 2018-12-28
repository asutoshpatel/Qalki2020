import { Book } from './book.model';

export class User {
  uid: string;
  username?: string;
  fullName?: string;
  email?: string;
  friends?: string[];
  books?: Book[];
}
