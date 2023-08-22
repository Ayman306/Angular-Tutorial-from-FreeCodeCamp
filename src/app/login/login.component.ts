import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { NgForm, NgModel } from '@angular/forms';

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
  login(form: NgForm) {
    console.log(form, 'ppppppppppppppppppppppppp');

    console.log(form.form.value.email, form.form.value.password);

    if (
      this.loginService.login(form.form.value.email, form.form.value.password)
    ) {
      alert('Hey Admin whats up!');
      this.route.navigateByUrl('/rooms');
    }
  }
}
