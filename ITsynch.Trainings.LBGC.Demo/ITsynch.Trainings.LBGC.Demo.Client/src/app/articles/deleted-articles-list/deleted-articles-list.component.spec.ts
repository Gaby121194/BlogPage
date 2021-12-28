import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedArticlesListComponent } from './deleted-articles-list.component';

describe('DeletedArticlesListComponent', () => {
  let component: DeletedArticlesListComponent;
  let fixture: ComponentFixture<DeletedArticlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedArticlesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
