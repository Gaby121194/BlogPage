import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftArticlesListDumbComponent } from './draft-articles-list-dumb.component';

describe('DraftArticlesListDumbComponent', () => {
  let component: DraftArticlesListDumbComponent;
  let fixture: ComponentFixture<DraftArticlesListDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftArticlesListDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftArticlesListDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
