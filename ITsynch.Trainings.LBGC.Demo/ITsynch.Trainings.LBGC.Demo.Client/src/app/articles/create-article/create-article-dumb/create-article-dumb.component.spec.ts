import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleDumbComponent } from './create-article-dumb.component';

describe('CreateArticleDumbComponent', () => {
  let component: CreateArticleDumbComponent;
  let fixture: ComponentFixture<CreateArticleDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArticleDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticleDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
