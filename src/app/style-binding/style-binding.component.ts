import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template:`
  <hr>
     <h1 [style.color]="'red'">hello</h1>
     <h1 [style.color]="hasError? 'red': 'blue'">cheeku is cheeku</h1>
     <hr>
  `,
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  hasError = false;
  constructor() { }

  ngOnInit(): void {
  }

}
