import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
  },
  {
    path: 'rooms/:id',
    component: RoomsBookingComponent,
  },
  {
    path: 'addRoom',
    component: RoomAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
