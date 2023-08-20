import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent {
  constructor(private router: ActivatedRoute) {}
  id!: any;
  id$ = this.router.params.pipe(map((param: any) => (this.id = param.id)));
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.router.params.subscribe((params: any) => {
    //   this.id = params.id;
    //   console.log(params.id);
    // });
    // this.router.paramMap.subscribe((params) => {
    //   params.get('id');
    // });
  }
}
