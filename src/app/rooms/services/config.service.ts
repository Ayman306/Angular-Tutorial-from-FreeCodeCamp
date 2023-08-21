import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './route-config.service';
import { RouteConfig } from './route-config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private config: RouteConfig) {
    console.log(this.config);
    console.warn('congifuration iniitiialised');
  }
}
