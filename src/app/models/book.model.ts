export class Book {
  id: string;
  visibility: BOOK_VISIBILITY;
  chapters: Chapter[];
}

export class Chapter {
  id: string;
  story: string;
  quotes: string[];
  notes: string[];
  bookmarks: number[];
  questions: Question[];
}

export class Question {
  id: string;
  text: string;
  answers: Answer[]; // max = 5
}

export class Answer {
  id: string;
  text: string;
}

export class BookSettings {
  backgroundColor: BACKGROUND_COLOR;
  colorStrength: number;
  layoutPreference: LAYOUT_PREFERENCE;
}

// TODO
/** WYSIWYG settings
 * create a list of all possible styles and create a hashmap for each word? redundancy is the issue
*/

export enum BOOK_VISIBILITY {
  FRIENDS = 'F',
  PUBLIC = 'P'
}

export enum BACKGROUND_COLOR {
  YELLOW = '#F7F6EF',
  BLACK = 'black',
  GREEN = '#D6FFE6'
}

export enum LAYOUT_PREFERENCE {
  ONE_PAGE = 'ONE',
  TWO_PAGE = 'TWO'
}
