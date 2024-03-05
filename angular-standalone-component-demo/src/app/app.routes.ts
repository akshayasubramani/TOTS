import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {
       path:'',
       redirectTo:'home-component',
       pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
   


];
