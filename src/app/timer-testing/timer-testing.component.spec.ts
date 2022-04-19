import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTestingComponent } from './timer-testing.component';

describe('TimerTestingComponent', () => {
  let component: TimerTestingComponent;
  let fixture: ComponentFixture<TimerTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
