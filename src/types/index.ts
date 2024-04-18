interface AuthorTypes {
  _id: string;
  displayName: string;
}
export interface BookTypes {
  _id: string;
  title: string;
  author: AuthorTypes;
  coverImage: string;
  file: string;
  genre: string;
  description: string;
  bookAuthor: string;
  createdAt: Date;
  updatedAt: Date;
}
