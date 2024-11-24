import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
  @Input() bookDetail!:Book;
  constructor(){}

ngOnInit(): void {

}
}
