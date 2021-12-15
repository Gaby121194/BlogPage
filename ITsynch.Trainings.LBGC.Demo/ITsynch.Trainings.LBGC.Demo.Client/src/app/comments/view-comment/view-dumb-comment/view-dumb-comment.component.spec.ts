import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDumbCommentComponent } from './view-dumb-comment.component';

describe('ViewDumbCommentComponent', () => {
  let component: ViewDumbCommentComponent;
  let fixture: ComponentFixture<ViewDumbCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDumbCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDumbCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
