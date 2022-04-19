import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template:`
     <h1>{{name}}</h1>
     <h1>{{age}}</h1>
     <h1>{{"hello".toUpperCase()}}</h1>
     <h1>{{50+10}}</h1>
     <h1>{{getDetails()}}</h1>
  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public name:string = "Partha";
  public age: Number = 50;
   constructor() { }

  public getDetails(){
      return this.name+" "+this.age
  }

  ngOnInit(): void {
  }

}
