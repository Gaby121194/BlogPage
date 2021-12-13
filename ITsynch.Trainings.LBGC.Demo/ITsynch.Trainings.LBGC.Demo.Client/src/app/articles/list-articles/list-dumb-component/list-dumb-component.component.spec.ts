import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDumbComponentComponent } from './list-dumb-component.component';

describe('ListDumbComponentComponent', () => {
  let component: ListDumbComponentComponent;
  let fixture: ComponentFixture<ListDumbComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDumbComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDumbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
