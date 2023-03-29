import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlButtonShelfComponent } from './control-button-shelf.component';

describe('ControlButtonShelfComponent', () => {
  let component: ControlButtonShelfComponent;
  let fixture: ComponentFixture<ControlButtonShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlButtonShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlButtonShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
