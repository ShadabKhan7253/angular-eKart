import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {
  mainMenu: string[] = [
    'Home',
    'Product',
    'Sale',
    'New Arrival',
    'Contact',
    'Service',
  ];
}
