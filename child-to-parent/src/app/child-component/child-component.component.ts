import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  // inputs: ['count'], // Way 2
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnChanges {

  @Input() count: number; // Way 1

  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {
      if (property === 'count') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
      }
    }
  }

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }

  ngOnInit() {
  }

}
