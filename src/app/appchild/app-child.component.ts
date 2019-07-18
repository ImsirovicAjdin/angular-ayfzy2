import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div style="display: inline-block; overflow: auto; height: 200px; width: 240px; background: plum; color: white; margin: 10px; padding: 20px;">
      Child component
      <div>ID: {{car?.id}}</div>
      <div [hidden]="!car?.old">
        <div>Only showing if car is old!</div>
        <div>CAR MAKE: {{car?.make}}</div>
      </div>
    </div>
  `
})
export class AppChildComponent {
  @Input() car;
}