import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommandComponent } from './addcommand.component';

describe('AddcommandComponent', () => {
  let component: AddcommandComponent;
  let fixture: ComponentFixture<AddcommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
