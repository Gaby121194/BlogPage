import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCommentComponent } from './create-comment.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from "@angular/router/testing";


fdescribe('CreateCommentComponent', () => {
  let component: CreateCommentComponent;
  let fixture: ComponentFixture<CreateCommentComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCommentComponent],
      imports: [ReactiveFormsModule, MatInputModule, BrowserAnimationsModule, RouterTestingModule],
      providers: [provideMockStore({}), { provide: FormBuilder, useValue: formBuilder }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentComponent);
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