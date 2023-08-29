import { Inject, Injectable } from '@angular/core';
import { RoomList } from 'src/app/Interface/rooms';
import { environmet } from 'src/environment/environment';
import {
  APP_SERVICE_CONFIG,
  APP_CONFIG,
} from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndPoint);
  }
  // roomListFunc$ = this.http.get<RoomList[]>('api/rooms').pipe(shareReplay(1));
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    token: '1234567899876',
  });
  roomListFunc$ = this.http.get<RoomList[]>('api/rooms').pipe(shareReplay(1));

  roomList: RoomList[] = [];
  randomFunc(){
    return this.http.get('https://api.chucknorris.io/jokes/randomsp')
  }
  roomListFunc() {
    // const header = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   token: '1234567899876',
    // });
    return this.http.get<RoomList[]>('/api/rooms', {
      // headers: header,
    });
    // this.roomList = [
    //   {
    //     // tslint
    //     roomNumber: 1,
    //     roomType: 'Single',
    //     amenities: 'Wifi',
    //     price: 100,
    //     checkintime: new Date(),
    //     checkoutime: new Date(),
    //   },
    //   {
    //     // tslint
    //     roomNumber: 2,
    //     roomType: 'Double',
    //     amenities: 'Wifi',
    //     price: 200,
    //     checkintime: new Date(),
    //     checkoutime: new Date(),
    //   },
    //   {
    //     // tslint
    //     roomNumber: 3,
    //     roomType: 'Suite',
    //     amenities: 'Wifi',
    //     price: 300,
    //     checkintime: new Date(),
    //     checkoutime: new Date(),
    //   },
    //   {
    //     // tslint
    //     roomNumber: 4,
    //     roomType: 'Deluxe',
    //     amenities: 'Wifi',
    //     price: 400,
    //     checkintime: new Date(),
    //     checkoutime: new Date(),
    //   },
    // ];
    // return [...this.roomList];
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
