import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/users/users.model';
import { Comment } from '../../comment.model';

@Component({
  selector: 'its-create-comment-dumb',
  templateUrl: './create-comment-dumb.component.html',
  styleUrls: ['./create-comment-dumb.component.css']
})
export class CreateCommentDumbComponent implements OnInit {
  @Input() currentUser: User;
  @Input() commentCreating: boolean;
  @Output() createClick = new EventEmitter<Comment>();
  commentForm = this.formBuilder.group({
    content: ["", [Validators.required, Validators.minLength(5)]],
    date: [new Date(), [Validators.required]]
  });
  comment: Comment;
  id: number;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id as number;
  }

  submitComment() {
    this.comment = this.commentForm.value;
    this.comment.user = this.currentUser;
    this.comment.IdArticle = this.id;
    this.createClick.emit(this.comment)
    this.commentForm.reset({
      content: "",
      date: new Date()
    });
  }

  public inputValidator(event: any) {
    const pattern = /^[a-zA-Z0-9-?.,:() ]*$/;   
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9-?.,:() ]/g, "");
    }
  }

}
