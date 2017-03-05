import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {

  @Output() clicked = new EventEmitter<string>();

  onClicked() {
    console.log("custom clicked event emitted");
    this.clicked.emit('It works!');
  }
}
