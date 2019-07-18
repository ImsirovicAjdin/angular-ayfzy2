import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <hr>
  `
})
export class AppChildComponent {
  @Input() car;
}