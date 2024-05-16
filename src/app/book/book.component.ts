import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  bookTitle: string = '';
  bookAuthor: string = '';

  bookList: BookModel[] = [];

  ngOnInit(): void {
    let list = localStorage.getItem('books');
    if (list) {
      this.bookList = JSON.parse(list);
    }
  }

  addNewBook() {
    let newBook: BookModel = {
      title: this.bookTitle,
      author: this.bookAuthor,
    };
    this.bookList.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.bookList));
  }

  deleteBook(index: number) {
    this.bookList.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.bookList));
  }
}
