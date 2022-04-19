import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TestingIfComponent } from './testing-if/testing-if.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { TimerTestingComponent } from './timer-testing/timer-testing.component';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
import { TimerTesting2Component } from './timer-testing2/timer-testing2.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TestingIfComponent,
    ForLoopComponent,
    TimerTestingComponent,
    TimerTesting2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';


// import { AppComponent } from './app.component';

// @NgModule({
//   imports:      [ BrowserModule, CountdownModule ],
//   declarations: [ AppComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }
