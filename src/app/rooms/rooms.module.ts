import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouteConfigToken } from './services/route-config.service';
import { UsdInrPipe } from '../pipes/usd-inr.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { CustomStyleDirective } from '../directive/custom-style.directive';
import { HoverBgDirective } from '../directive/hover-bg.directive';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomAddComponent,
    UsdInrPipe,
    SortPipe,
    CustomStyleDirective,
    HoverBgDirective
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule, HeaderModule],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: {
        title: 'Home',
      },
    },
  ],
})
export class RoomsModule {}
