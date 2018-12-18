import { Book } from './book.model';

export class User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  password: string;
  friends: string[];
  books: Book[];
}
