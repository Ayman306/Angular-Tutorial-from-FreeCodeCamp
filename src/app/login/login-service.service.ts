import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  isLoggedIn = false;
  constructor() {}
  login(email: any, password: any) {
    console.log(email, password, 'oooooooooooooooooo');

    if (email === 'admin@gmail.com' && password === 'Admin') {
      alert('Hey Admin whats up!');
      return true;
    } else {
      return false;
    }
  }
}
