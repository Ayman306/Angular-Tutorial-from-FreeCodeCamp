import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  OnInit,
  Inject,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  @Input() color: string = 'red';
  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.element);
    this.element.nativeElement.style.backgroundColor = this.color;
    this.document.body.style.color = 'pink';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'pink';
  }
}
