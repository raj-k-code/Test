import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `

     <h1 [class]="firstHeading">hello</h1>
     <h1 [class]="secondHeading">Raj</h1>
     <h1 [ngClass]="thirdHeading">kasotiya</h1>
  `,
  styles: [`
     .first-heading{
        color: red;
     }
     .second-heading{
        font-style: italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {
   firstHeading = "first-heading";
   secondHeading = "second-heading";
   thirdHeading = {
    "first-heading": true,
    "second-heading": true
   }
  constructor() { }

  ngOnInit(): void {
  }

}
