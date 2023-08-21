import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
  Inject,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorage } from './localstorage.token';
import { InitService } from './init.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  ngAfterContentInit(): void {}
  ngOnInit(): void {
    console.log(this.name);
    this.logger?.log('From app component');
    this.name.nativeElement.innerText = 'sunny ';
    this.LocalStorage.setItme('name', 'Ayaan');
    this.route.events
      .pipe(filter((event: any) => event instanceof NavigationStart))
      .subscribe((event: any) => console.log('NavigationStarted'));
  }
  constructor(
    @Optional() private logger: LoggerService,
    @Inject(LocalStorage) private LocalStorage: any,
    private initService: InitService,
    private route: Router
  ) {
    console.log(this.initService.config, 'initial service');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const companyRef = this.vcr.createComponent(RoomsComponent);
    companyRef.instance.numberOfRoom = 50;
  }
  title = 'hotelinventory';
  role = 'admin';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;
}
