import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  userList=[
    {id:100,name:"Raj" , age: 18, mobile: '90097878924'},
    {id:101,name:"Vaishali" , age: 27, mobile: '90097878924'},
    {id:102,name:"Jayshree" , age: 25, mobile: '90097878924'},
    {id:103,name:"laksh" , age: 24, mobile: '90097878924'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
