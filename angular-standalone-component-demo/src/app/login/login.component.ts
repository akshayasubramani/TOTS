import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  

  onSubmit() {
    // Add login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }


}
