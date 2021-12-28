import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateArticleDumbComponent } from './create-article-dumb.component';

fdescribe('CreateArticleDumbComponent', () => {
  let component: CreateArticleDumbComponent;
  let fixture: ComponentFixture<CreateArticleDumbComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArticleDumbComponent ],
      imports: [ReactiveFormsModule, MatInputModule, BrowserAnimationsModule],
      providers: [ { provide: FormBuilder, useValue: formBuilder } ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticleDumbComponent);
    component = fixture.componentInstance;
    component.articleForm = formBuilder.group({
      title: ["", [Validators.required]],
      content: ["", [Validators.required, Validators.minLength(5)]],
      date: [ new Date() , [Validators.required]]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit button should be disabled when articleform is empty', () => {
    let sumbitButton = fixture.debugElement.nativeElement.querySelector("#sumbitButton")
    expect(sumbitButton.disabled).toBeTruthy();
  })

  it('submit button should be not disabled when articleform is full', () => {
    let sumbitButton = fixture.debugElement.nativeElement.querySelector("#sumbitButton")
    component.articleForm.setValue({
      title: "es un nuevo titulo",
      content: "un contenido para el form",
      date: new Date()
    })
    fixture.detectChanges();
    expect(sumbitButton.disabled).toBeFalse();
  })
});
