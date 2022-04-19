import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-testing',
  templateUrl: './timer-testing.component.html',
  styleUrls: ['./timer-testing.component.css'],
})
export class TimerTestingComponent implements OnInit {
  dataList:any[]=[
    {
      name:"Book",
      startDate:"04/10/2022 12",
      starTiming:"3400"
    },
    {
      name:"Pen",
      startDate:"04/10/2022 13",
      starTiming:"5400"
    },
    {
      name:"Pencil",
      startDate:"04/10/2022 14",
      starTiming:"7200"
    }
  ]


  countDown: any = 0;
  deadLinehours: any = 0;
  Timer:any;
  Boolean:boolean=false;
  // deadMinutes: any = 0;

  constructor() {}

  startTime: any = '04/10/2022 18';
  time = this.startTime.split(' ');

  public toTimestamp(startTime:any) {
    let time = startTime.split(' ');

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    this.deadLinehours = parseInt(time[1]) - hours;

    // var datum = Date.parse(startTime);
    //  return datum/100;
    this.countDown = 3600 * this.deadLinehours - 60 * minutes;

    // alert(
    //   datum / 100 +
    //     '   ' +
    //     datum +
    //     '  ' +
    //     this.time[1] +
    //     'DeadLine====' +
    //     this.deadLinehours +
    //     '  ' +
    //     minutes +
    //     '    ==' +
    //     this.countDown
    // );
    // this.Timer = {leftTime: this.countDown}
  }

  ngOnInit(): void {}

  // let seconds = date.getSeconds();

  // let currentTime = hours //+ ':' + minutes + ':' + seconds;

  // this.deadMinutes =   (parseInt(this.time[2]) - minutes)

  // if(minutes< 0)
  //     this.deadMinutes=  0 - this. deadMinutes

  // if(this.countDown==0){
  //   alert('Time Up');
  // }

  // alert(toTimestamp('04/07/2022 08:00:00'));

  // startingTime:number=0;
  // dispayTime:any;
  // dateNow:any;
  // public startTime(){
  //   let timer = setInterval(()=>{
  //      this.dateNow = new Date();
  //     //  this.dispayTime = Date.parse(" "+this.dateNow.getHours());
  //      this.dateNow++
  //      this.dispayTime = this.dateNow.getHours()+":"+this.dateNow.getMinutes();

  //   },1000)
  // }
}



// let date_ob = new Date();

// // current date
// // adjust 0 before single digit date
// let date = ("0" + date_ob.getDate()).slice(-2);

// // current month
// let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// // current year
// let year = date_ob.getFullYear();

// // current hours
// let hours = date_ob.getHours();

// // current minutes
// let minutes = date_ob.getMinutes();

// // current seconds
// let seconds = date_ob.getSeconds();

// // prints date in YYYY-MM-DD format0
// console.log(year + "-" + month + "-" + date);

// // prints date & time in YYYY-MM-DD HH:MM:SS format
// console.log(year+month +  date +" "+ hours + minutes  + seconds);

// // prints time in HH:MM format

