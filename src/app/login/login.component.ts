import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { FormArray, FormBuilder, NgForm, NgModel, Validators } from '@angular/forms';

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
    private loginService: LoginServiceService,
    private fb:FormBuilder
  ) { }
  food = this.fb.group({
    Food_type: ['', ],
    Quantity: ['',  ],
    Address: this.fb.group({
      street: ['',  ]
    }),

    Pnumber: this.fb.array([
  ])
  })

  get() {
    return this.food.controls.Pnumber as FormArray
  }
  add() {
    this.get().push(this.fb.control('',  ))
  }
  // addControl() {
  //   return this.fb.array([
  //     { 'Food': [''] },
  //     { 'Quantity': [''] }
  //   ])
  // }
  remove(id:number) {
    this.get().removeAt(id)
  }

  foodSubmit() {
    console.log(this.food.value,"Values");

  }
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
