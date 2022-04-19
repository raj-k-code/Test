import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingIfComponent } from './testing-if.component';

describe('TestingIfComponent', () => {
  let component: TestingIfComponent;
  let fixture: ComponentFixture<TestingIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
