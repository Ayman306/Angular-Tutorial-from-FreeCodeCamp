import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  constructor(private route: Router) {}
  login(login: any) {
    console.log();

    if (this.email === 'admin@gmail.com' && this.password === 'Admin') {
      alert('Hey Admin whats up!');
      this.route.navigateByUrl('/room');
    }
  }
}
