import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  forms = {
    email: '',
    password: '',
  };
  constructor(
    private route: Router,
    private loginService: LoginServiceService
  ) {}
  login(form: any) {
    console.log(form, 'ppppppppppppppppppppppppp');

    console.log(this.email, this.password);

    if (this.loginService.login(this.email, this.password)) {
      alert('Hey Admin whats up!');
      this.route.navigateByUrl('/rooms');
    }
  }
}
