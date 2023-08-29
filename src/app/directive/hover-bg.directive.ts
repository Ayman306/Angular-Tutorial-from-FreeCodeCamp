import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBg]'
})
export class HoverBgDirective {

  constructor(private el:ElementRef) { }

  @HostListener("mouseenter")  mouseHover(){
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.color="white"
  }
  @HostListener("mouseenter")  mouseHover1(){
    this.el.nativeElement.style.backgroundColor = 'pink';
    this.el.nativeElement.style.color="white"
  }
  @HostListener('mouseleave') mouseOut(){
    this.el.nativeElement.style.backgroundColor='white'
    this.el.nativeElement.style.color="black"
  }
}
