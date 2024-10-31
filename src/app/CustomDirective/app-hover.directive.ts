import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor = '#28282B';
  @HostBinding('style.color') textColor: string = '#fff';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor = '#fff';
    this.textColor = '#28282B';
    this.border = '#28282B 2px solid';
  }

  @HostListener('mouseout') OnMouseOut() {
    this.backgroundColor = '#28282B';
    this.textColor = '#fff';
    this.border = 'none';
  }
}
