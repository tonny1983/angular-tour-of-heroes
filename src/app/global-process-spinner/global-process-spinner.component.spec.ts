import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalProcessSpinnerComponent } from './global-process-spinner.component';

describe('GlobalProcessSpinnerComponent', () => {
  let component: GlobalProcessSpinnerComponent;
  let fixture: ComponentFixture<GlobalProcessSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalProcessSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalProcessSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
