import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/users/users.model';
import { Comment } from '../../comment.model';

@Component({
  selector: 'its-view-dumb-comment',
  templateUrl: './view-dumb-comment.component.html',
  styleUrls: ['./view-dumb-comment.component.css']
})
export class ViewDumbCommentComponent implements OnInit {
  @Input() public comment: Comment;
  @Input() public currentUser: User;

  @Output() deleteCommentClick = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteCommentClicked(id: number){
    this.deleteCommentClick.emit(id);
  }
}
