import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  books = [
    { title: 'Caterpillar', imageUrl: '../assets/kids book.webp' },
    { title: 'monkey', imageUrl: '../assets/kids books.webp' },
    {title:'Farm',imageUrl:'../assets/book3.jpg' },
    {title:'Birthday',imageUrl:'../assets/book4.webp' },
    {title:'Dino', imageUrl:'../assets/book5.jpg'}
    // Add more book objects as needed
  ];
  addToCart(book: any) {
    // Add logic to add the book to the cart
    console.log('Added to cart:', book);
  }

}