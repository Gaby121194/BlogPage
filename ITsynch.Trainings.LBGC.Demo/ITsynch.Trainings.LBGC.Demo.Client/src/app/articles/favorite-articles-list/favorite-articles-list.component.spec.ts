import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteArticlesListComponent } from './favorite-articles-list.component';

describe('FavoriteArticlesListComponent', () => {
  let component: FavoriteArticlesListComponent;
  let fixture: ComponentFixture<FavoriteArticlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteArticlesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
