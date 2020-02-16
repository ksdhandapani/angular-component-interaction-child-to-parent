import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction - child-to-parent';

  counter = 1;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  countChangedHandler(count: number) {
    this.counter = count;
    console.log(count);
  }

}
