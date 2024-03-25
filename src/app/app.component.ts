import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app.component.css'],
})
export class AppComponent {
  counter: number = 0;

  constructor() {}

  resetValue() {
    this.counter = 0;
  }

  receiveValue($event: string) {
    this.counter += Number($event);
  }
}
