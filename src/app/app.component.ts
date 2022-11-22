import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
constructor(private auth : AuthService){}


logout() {
  this.auth.logout();
}
}
