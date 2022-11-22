import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'login',
    component: LoginComponent    
  },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule ,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),

  ] ,
  exports : [LoginComponent]

})
export class AuthModule { }
