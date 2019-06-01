import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndocommandComponent } from './undocommand.component';

describe('UndocommandComponent', () => {
  let component: UndocommandComponent;
  let fixture: ComponentFixture<UndocommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndocommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndocommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
