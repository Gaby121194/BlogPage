import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedArticlesListDumbComponent } from './deleted-articles-list-dumb.component';

describe('DeletedArticlesListDumbComponent', () => {
  let component: DeletedArticlesListDumbComponent;
  let fixture: ComponentFixture<DeletedArticlesListDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedArticlesListDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedArticlesListDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
