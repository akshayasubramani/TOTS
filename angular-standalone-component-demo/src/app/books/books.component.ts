import { CommonModule } from '@angular/common';

import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})

export class BooksComponent implements OnInit {
  books:any=[];
  isInCart:any;
  constructor(private booksservice:ServiceService,private navbarComponent:AppComponent) {}
  //getting books data from books json
  ngOnInit(): void {
   
    this.booksservice.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  

  // books = [
  //   { title: 'Caterpillar', imageUrl: '../assets/kids book.webp' },
  //   { title: 'monkey', imageUrl: '../assets/kids books.webp' },
  //   {title:'Farm',imageUrl:'../assets/book3.jpg' },
  //   {title:'Birthday',imageUrl:'../assets/book4.webp' },
  //   {title:'Dino', imageUrl:'../assets/book5.jpg'}
  //   // Add more book objects as needed
  // ];

  

  addToCart(book: any) {
      this.navbarComponent.addToCarts(); // Call addToCart() method of navbar component
      console.log('Added to cart:', book);  
    }
  



}
