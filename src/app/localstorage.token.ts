import { InjectionToken } from '@angular/core';
export const LocalStorage = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory: () => {
    return localStorage;
  },
});
