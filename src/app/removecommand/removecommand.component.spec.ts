import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovecommandComponent } from './removecommand.component';

describe('RemovecommandComponent', () => {
  let component: RemovecommandComponent;
  let fixture: ComponentFixture<RemovecommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovecommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovecommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
