import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet ,Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent,RouterLink,BooksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'angular-standalone-component-demo';
   isDropdownOpen = false;
   showLoginForm = false;
 

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleLoginForm(){
    if (!this.showLoginForm) { // Check if form is not already visible
      this.showLoginForm = true;
    }
   
    
    console.log("login is clicked")
    
  }
  onClickBooks(){
    console.log("books clicked")
  }
 
  

  
}
