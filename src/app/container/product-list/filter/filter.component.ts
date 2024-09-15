import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outStock: number = 0;

  @Output()
  selectedFilterRadiaButtonChange: EventEmitter<string> =
    new EventEmitter<string>();

  selectedFilterRadioaButton: string = 'All';

  onSelectedRadioButtonChange() {
    this.selectedFilterRadiaButtonChange.emit(this.selectedFilterRadioaButton);
  }
}
