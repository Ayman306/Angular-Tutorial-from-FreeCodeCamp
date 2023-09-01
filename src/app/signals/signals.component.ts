import { Component,  OnInit,  computed,  effect,  signal } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent implements OnInit{
  constructor(private fb: FormBuilder) {
  }



  ngOnInit(): void {

  }
  empForm = this.fb.group({
    details: this.fb.array([
    ])
  });
  get() {
    return this.empForm.controls.details as FormArray
  }
  add() {
    this.get().push(this.addControls())
  }
  addControls() {
    return this.fb.group([
      { 'name': [''] },
      { 'position': [''] },
      {'department':['']}
    ])
  }
  remove(id:any) {
    this.get().removeAt(id)
  }
firstName=signal("Sharuk"); //initial value is mandatory
lastName=signal("Khan")
fullName = computed(()=> this.firstName() + ' ' + this.lastName()) // whenever the dependecny changes the computed signal is hit

changeFirstName(fName:any){
  this.firstName.set(fName) //setValue to the signal
}
changeLastName(lName:any){
  this.lastName.set(lName)
}

  // Updating the signal
    qty=signal(5)
  increase() {
    this.qty.update((v) => v+1)

  }
  decrease() {
    this.qty.update((v)=> v-1)

  }
display=false
  // Mutate the signal, used to modify array or object
  employees = signal([
    { name: 'John Doe', position: 'Manager', department: 'Sales' },
    { name: 'Jane Doe', position: 'Sales', department: 'Sales' },
    { name: 'Jack Doe', position: 'Sales', department: 'Sales' },
  ])

  employeeForm = this.fb.group({
     name: [''] ,
     position: [''] ,
     department: ['']
  })
  addEmp(form:any) {
    console.log(this.employeeForm.value);
    this.employees.mutate((empList) => {
      empList.push(form.value)
      console.log(empList);
    })
    this.employeeForm.reset()
  }

  // mutate objects

  electronics=signal({
    name: 'Electronics',
    products: [
      { name: 'TV', price: 20000 },
      { name: 'Laptop', price: 100000 },
    ],
  })
  changeProduct() {
    this.electronics.mutate((prod) => {
      prod.products[0].price = 30000
      console.log(prod);
    })
  }

  // signals effect()
  // whever a signal is mutated  or updated this effect() method is reflected

  sideEffects= effect(()=>console.log('Product price changed' + this.electronics().products[0].price)
  )
}
