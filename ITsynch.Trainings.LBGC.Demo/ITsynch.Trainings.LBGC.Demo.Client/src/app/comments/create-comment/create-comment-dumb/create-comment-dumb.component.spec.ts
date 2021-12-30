import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateCommentDumbComponent } from './create-comment-dumb.component';

fdescribe('CreateCommentDumbComponent', () => {
  let component: CreateCommentDumbComponent;
  let fixture: ComponentFixture<CreateCommentDumbComponent>;
  const formBuilder: FormBuilder = new FormBuilder()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommentDumbComponent ],
      imports: [ReactiveFormsModule, MatInputModule, BrowserAnimationsModule, RouterTestingModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentDumbComponent);
    component = fixture.componentInstance;
    component.commentForm = formBuilder.group({
      content: ["", [Validators.required, Validators.minLength(5)]],
      date: [new Date(), [Validators.required]]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should be disabled if the value is null", () => {
    component.commentForm.setValue({
      content: "", 
      date: new Date()
    });
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitButton"
    );
    fixture.detectChanges();
    expect(button.disabled).toBeTrue();
  });

  it('should return invalid form', () => {    
    component.commentForm.setValue({
      content: "hola",
      date: new Date()
    })
    fixture.detectChanges();
    expect(component.commentForm.invalid).toBeTruthy();
  })

  it('should return valid form', () => {    
    component.commentForm.setValue({
      content: "hola probando",
      date: new Date()
    })
    fixture.detectChanges();
    expect(component.commentForm.valid).toBeTruthy();
  })
});
