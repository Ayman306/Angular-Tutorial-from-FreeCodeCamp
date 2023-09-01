import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('5000ms', style({ opacity: 1 })),
  ]),
]);
export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('10000ms', style({ transform: 'translateX(-100%)' })),
  ]),
]);
