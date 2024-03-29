import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div style="display: inline-block; overflow: auto; height: 200px; width: 240px; background: plum; color: white; margin: 10px; padding: 20px;">
      Child component
      <div [ngSwitch]="car?.make">
        MAKE: {{car?.make}}
        <span *ngSwitchCase="'Subaru'"> {{ this.string1 }}</span>
                <span *ngSwitchCase="'Toyota'">  {{ this.string2 }}</span>
                <span *ngSwitchCase="'VW'">  {{ this.string3 }}</span>
                <span *ngSwitchDefault>  {{ this.string4 }}</span>         
      </div>
      <div>ID: {{car?.id}}</div>
      <div [hidden]="!car?.old">
        <div>Only showing if car is old!</div>
        <div>CAR MAKE: {{car?.make}}</div>
      </div>
    </div>
  `
})
export class AppChildComponent implements OnInit {
  @Input() car;

  string1 = "(No. 1 Choice)";
    string2 = "(Japanese)";
    string3 = "(German)";
    string4 = "(default case)";

    logCars(){
        console.log(this.car);
    }

    ngOnInit() {
        this.logCars();
    }    
}