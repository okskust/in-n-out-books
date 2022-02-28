/**
 * Title: book.interface.ts
 * Author: Oksana Kustova
 * Date: 02/02/2022
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}
