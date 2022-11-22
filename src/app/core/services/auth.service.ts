import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginRequestInterface } from '../models/loginRequest.interface';
import { AuthResponseInterface } from '../models/authResponse.interface';
import { Router } from '@angular/router';
import { PersistanceService } from './persistent.service';


@Injectable()
export class AuthService {
  url = environment.authUrl;

  constructor(private http: HttpClient, private router: Router ,  private persistanceService: PersistanceService,
    ) {}

  login(data: LoginRequestInterface)  {
    return this.http.post<AuthResponseInterface>(this.url + 'login', data).pipe(
        
      map((data) => {
       // localStorage.setItem('currentUser', JSON.stringify(data.user));
        this.persistanceService.set('currentUser', data.user);

        this.router.navigate(['/weather']);
      })
    )
  }

  logout() {
    // remove user from local storage to log user out
   // localStorage.removeItem('currentUser');
    this.persistanceService.remove('currentUser');

    this.router.navigate(['/login']);
  }
}
