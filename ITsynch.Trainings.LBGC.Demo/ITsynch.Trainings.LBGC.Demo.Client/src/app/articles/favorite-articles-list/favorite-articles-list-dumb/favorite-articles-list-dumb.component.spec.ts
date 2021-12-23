import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteArticlesListDumbComponent } from './favorite-articles-list-dumb.component';

describe('FavoriteArticlesListDumbComponent', () => {
  let component: FavoriteArticlesListDumbComponent;
  let fixture: ComponentFixture<FavoriteArticlesListDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteArticlesListDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteArticlesListDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
