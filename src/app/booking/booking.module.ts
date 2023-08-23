import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ],
})
export class BookingModule {}
