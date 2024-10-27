import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // private element: ElementRef;

  // It will automatically create the private filled element and assign the value too.
  constructor(private element: ElementRef) {
    // this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#36454f';
    this.element.nativeElement.style.color = 'white';
  }
}
