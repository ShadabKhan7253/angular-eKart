import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {}

  updatedSearchText(searchInput: HTMLInputElement) {
    this.searchText = searchInput.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
