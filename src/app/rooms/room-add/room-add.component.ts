import { Component } from '@angular/core';
import { RoomList } from 'src/app/Interface/rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss'],
})
export class RoomAddComponent {
  constructor(private roomService: RoomsService) {}
  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    checkintime: new Date(),
    checkoutime: new Date(),
  };
  success = '';
  addRoom(roomsForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe(
      (data) => {
        console.log('done');
        this.success = 'Rooms Addedd';
      },
      (err) => console.log(err),
      () => {
        roomsForm.reset();
      }
    );
  }
}
