import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-if',
  templateUrl: './testing-if.component.html',
  styleUrls: ['./testing-if.component.css']
})
export class TestingIfComponent implements OnInit {
  status = false;
  constructor() { }

  ngOnInit(): void {
  }

}
