import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="increment()">Click me!</button>
    <p>You've clicked the button {{ count }} times.</p>
  `,
})
export class App {
  name = 'Angular';
  count = 0;

  increment() {
    this.count++;
  }
}

bootstrapApplication(App);
