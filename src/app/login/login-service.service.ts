import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  isLoggedIn = false;
  isAdmin=false
  constructor() {}
  login(email: any, password: any) {
    console.log(email, password, 'oooooooooooooooooo');

    if (email === 'admin@gmail.com' && password === 'Admin') {
      this.isLoggedIn=true
      this.isAdmin=true
      alert('Hey Admin whats up!');
    } else if(email === 'user@gmail.com' && password === 'User'){
      this.isLoggedIn=true
      this.isAdmin=false
    }
    return this.isLoggedIn;
  }
}
