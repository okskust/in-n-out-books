/**
 * Title: book-details-dialog.components.ts
 * Author: Oksana Kustova
 * Date: 02/05/2022
 * Description: BookDetailsDialogComponent.
 */
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
