import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCommentComponent } from './create-comment.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from "@angular/router/testing";


describe('CreateCommentComponent', () => {
  let component: CreateCommentComponent;
  let fixture: ComponentFixture<CreateCommentComponent>;
  ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCommentComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});