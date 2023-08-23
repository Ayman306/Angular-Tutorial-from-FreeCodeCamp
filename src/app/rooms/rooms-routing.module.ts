import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { RoomGuard } from './guards/rooms.guard';

const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
    children: [
      { path: 'addRoom', component: RoomAddComponent ,
      canActivateChild:[RoomGuard]
    },
      { path: ':roomid', component: RoomsBookingComponent },
    ],
  },
  // {
  //   path: 'rooms/:id',
  //   component: RoomsBookingComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
