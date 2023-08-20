import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {}
  log(mesg: any) {
    console.log(mesg);
  }
}
