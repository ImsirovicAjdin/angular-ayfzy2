import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>Parent component; Hide-show with ngSwitch</div>
    <app-child *ngFor="let vehicle of vehicles" [car]="vehicle"></app-child>
  `
})
export class AppComponent  {
  vehicles = [
    { id: 1, make: 'Toyota', color: { body: 'red', interior: 'gray' } },
    { id: 2, make: 'Subaru', color: { body: 'red', interior: 'gray' } },
    { id: 3, make: 'VW', old: 'yes' },
    { id: 4, make: 'Other', color: { body: 'yellow', interior: 'gray' } },
  ]
}
