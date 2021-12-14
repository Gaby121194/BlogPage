import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDumbComponent } from './view-dumb.component';

describe('ViewDumbComponent', () => {
  let component: ViewDumbComponent;
  let fixture: ComponentFixture<ViewDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
