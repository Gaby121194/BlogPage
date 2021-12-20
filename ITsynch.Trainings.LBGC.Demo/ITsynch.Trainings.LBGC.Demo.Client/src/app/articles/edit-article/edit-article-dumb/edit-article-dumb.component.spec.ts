import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleDumbComponent } from './edit-article-dumb.component';

describe('EditArticleDumbComponent', () => {
  let component: EditArticleDumbComponent;
  let fixture: ComponentFixture<EditArticleDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArticleDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
