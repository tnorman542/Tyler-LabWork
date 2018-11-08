import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private books: Book[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBooks().subscribe(bookList => {
      this.books = bookList;
    });
  }

  deleteBook(book: Book) {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }

    this.dataService.deleteBook(book.isbn).subscribe(_ => {
      this.books = this.books.filter(b => b.isbn !== book.isbn)
    },
    err => {
      alert(err);
    })
  }

}
