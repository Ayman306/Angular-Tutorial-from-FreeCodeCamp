import {
  Component,
  ViewChild,
  AfterViewInit,
  ContentChild,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  // providers: [RoomsService],
})
export class ContainerComponent implements AfterViewInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  ngAfterViewInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Ram';
  }
  constructor(private roomService: RoomsService) {}
  OnInit() {
    this.roomService.roomListFunc();
  }
}
