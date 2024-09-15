import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'John', 'Sara', 'Stive'];

  searchText: string = '';

  setSearchText(value: string) {
    // console.log(value);
    this.searchText = value;
  }
}
