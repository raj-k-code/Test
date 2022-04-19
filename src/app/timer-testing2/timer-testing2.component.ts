import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-testing2',
  templateUrl: './timer-testing2.component.html',
  styleUrls: ['./timer-testing2.component.css']
})
export class TimerTesting2Component implements OnInit {
  dataList:any[]=[
    {
      name:"Book",
      startDate:"04/12/2022 14:00:00",
      endDate:"04/12/2022 15:00:00",

    },
    {
      name:"Pen",
      startDate:"04/13/2022 11:00:00",
      endDate:"04/13/2022 12:00:00",
    },
    {
      name:"Pencil",
      startDate:"04/12/2022 18:00:00",
      endDate:"04/12/2022 19:00:00",
    }
  ]

  constructor() { }

  public beforeStarting(startTime:any):boolean{
    let temp = Date.parse(startTime);
    if(Date.now() <= temp)
       return true
    else
       return false
  }

  public afterStarting(startTime:any, endTime:any):boolean{
    let startTemp = Date.parse(startTime);
    let endTemp = Date.parse(endTime);

    if(Date.now() >= startTemp && Date.now() <= endTemp)
       return true
    else
       return false
  }
//raj
  ngOnInit(): void {
  }

}
