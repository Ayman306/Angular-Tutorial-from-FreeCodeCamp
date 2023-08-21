import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RoomList, Rooms } from '../Interface/rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete();
  });
  totalByte: number = 0;
  subscription!: Subscription;
  error$: Subject<string> = new Subject<string>();
  // rooms$ = this.roomsService.roomListFunc$;
  rooms$ = this.roomsService.roomListFunc$.pipe(
    catchError((err) => {
      console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );
  roomsCount$ = this.roomsService.roomListFunc$.pipe(map((res) => res.length));
  getErrors$ = this.error$.asObservable();
  ngOnInit(): void {
    this.stream.subscribe((data) => {
      console.log(data);
    });
    // this.roomsService.roomListFunc$.subscribe((res) => {
    //   this.roomList = res;
    //   console.log(res);
    // });
    this.subscription = this.roomsService
      .getPhotos()
      .subscribe((event: any) => {
        switch (event.type) {
          case HttpEventType.Sent: {
            console.log('Request has been made!');
            break;
          }
          case HttpEventType.ResponseHeader: {
            console.log('Response header has been received!');
            break;
          }
          case HttpEventType.UploadProgress: {
            this.totalByte = Math.round((event.loaded * 100) / event.total);
            console.log(`Uploaded! ${this.totalByte}%`);
            break;
          }
          case HttpEventType.Response: {
            console.log(event.body);
            break;
          }
        }
      });
  }
  constructor(
    @SkipSelf() private roomsService: RoomsService,
    private route: Router
  ) {}
  ngAfterViewChecked(): void {
    console.log('After view checked called');
  }
  ngAfterViewInit(): void {
    console.log('After view init called', this.headerComponent);
    this.headerComponent.title = 'King khan';
    console.log((this.headerChildrenComponent.last.title = 'last title'));
  }
  ngDoCheck(): void {
    console.log('On changes called');
  }
  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent, { static: true })
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;
  headerComponent!: HeaderComponent;

  title = 'Rooms Lists';
  selectedRooms!: RoomList;
  selectedRoom(e: RoomList) {
    this.selectedRooms = e;
    console.log(e);
  }
  addRoom() {
    this.route.navigateByUrl('rooms/addRoom');
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe',
      amenities: 'Wifi',
      price: 400,
      checkintime: new Date(),
      checkoutime: new Date(),
    };
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }
  editRoom() {
    const room: RoomList = {
      roomNumber: 3,
      roomType: 'Deluxe',
      amenities: 'Wifi',
      price: 400,
      checkintime: new Date(),
      checkoutime: new Date(),
    };
    this.roomsService.editRoom(room).subscribe((res) => {
      this.roomList = res;
    });
  }
  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((res) => {
      this.roomList = res;
    });
  }
  name = 'Ayman';
  numberOfRoom = 10;
  hidden = true;

  rooms: Rooms = {
    availableRooms: 10,
    bookedRooms: 2,
    totalRooms: 30,
  };
  clickMe() {
    this.numberOfRoom = this.numberOfRoom + 1;
  }
  toggle() {
    this.title = 'Something man';
    this.hidden = !this.hidden;
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
