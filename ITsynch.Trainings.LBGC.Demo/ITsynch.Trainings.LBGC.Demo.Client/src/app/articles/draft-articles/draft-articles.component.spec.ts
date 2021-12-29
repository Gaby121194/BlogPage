import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftArticlesComponent } from './draft-articles.component';

describe('DraftArticlesComponent', () => {
  let component: DraftArticlesComponent;
  let fixture: ComponentFixture<DraftArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
