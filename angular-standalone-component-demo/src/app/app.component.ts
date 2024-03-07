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
  constructor(private router: Router){}
   title = 'angular-standalone-component-demo';
   isDropdownOpen = false;
   showLoginForm = false;
   cartItemCount=0
   buttondisabled:boolean=false
 

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleLoginForm(){
    if (!this.showLoginForm) { // Check if form is not already visible
      this.showLoginForm = true;
    }
   
    
    console.log("login is clicked")
    
  }
  isSubmenuRoute(): boolean {
    // Determine if current route is a submenu route
    const currentUrl = this.router.url;
    return currentUrl !== '/' && !currentUrl.startsWith('/home');
  }
  onClickBooks(){
    console.log("books clicked")
  }
  toggleCart(){
    console.log("toggle cart")
  }
  addToCarts() {
    this.cartItemCount=this.cartItemCount+1;
   
     // Increment cart item count
  }
  
 
  

  
}
