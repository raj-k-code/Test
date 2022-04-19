import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTesting2Component } from './timer-testing2.component';

describe('TimerTesting2Component', () => {
  let component: TimerTesting2Component;
  let fixture: ComponentFixture<TimerTesting2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerTesting2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTesting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
