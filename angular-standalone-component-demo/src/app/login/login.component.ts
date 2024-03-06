import { Component, inject } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { RegisterComponent } from '../register/register.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RegisterComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor( private router:Router ){
  
  }
  username: string = '';
  password: string = '';
  

  onSubmit() {
    // Add login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
  onClickRegister(){
   this.router.navigate(['/register'])
    console.log("aaa")
  }


}
