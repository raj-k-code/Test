import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <hr>
   <h1 style.co="{{firstId}}">firstId</h1>
   <h1 [id]="secondId">secondId</h1>
   <input [disabled]="status" type="text">
   <hr>
  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
   firstId = "first-heading";
   secondId = "second-heading";
   status = false;
  constructor() { }

  ngOnInit(): void {
  }

}
