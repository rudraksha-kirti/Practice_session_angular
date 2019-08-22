import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeesionsComponent } from './seesions.component';

describe('SeesionsComponent', () => {
  let component: SeesionsComponent;
  let fixture: ComponentFixture<SeesionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeesionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeesionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
