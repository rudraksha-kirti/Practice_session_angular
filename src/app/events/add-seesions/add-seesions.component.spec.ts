import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeesionsComponent } from './add-seesions.component';

describe('AddSeesionsComponent', () => {
  let component: AddSeesionsComponent;
  let fixture: ComponentFixture<AddSeesionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSeesionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeesionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
