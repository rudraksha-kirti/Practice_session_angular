import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeesionsReactiveComponent } from './add-seesions-reactive.component';

describe('AddSeesionsReactiveComponent', () => {
  let component: AddSeesionsReactiveComponent;
  let fixture: ComponentFixture<AddSeesionsReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSeesionsReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeesionsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
