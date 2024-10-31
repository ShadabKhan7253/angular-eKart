import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // private element: ElementRef;
  // private renderer : Renderer2;

  @Input('setBackground') backColor: string = '#36454f';
  @Input() textColor: string = '#fff';

  // It will automatically create the private filled element and assign the value too.
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element = element;
    // this.renderer = renderer;
  }

  ngOnInit() {
    // It is not prefer to diretly manipulate the DOM element in order to prevent this
    // angular provide Renderer2 class to do this
    // this.element.nativeElement.style.backgroundColor = '#36454f';
    // this.element.nativeElement.style.color = 'white';

    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      this.backColor
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
  }
}
