import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template:`
    <button (click)="sayHello()" type="submit" class="btn btn-success">Say Hello</button>
    <hr>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public sayHello(){
    alert("Hello Raj");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
