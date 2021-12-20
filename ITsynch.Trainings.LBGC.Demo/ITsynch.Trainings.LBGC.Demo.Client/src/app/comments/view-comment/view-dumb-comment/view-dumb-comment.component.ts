import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../comment.model';

@Component({
  selector: 'its-view-dumb-comment',
  templateUrl: './view-dumb-comment.component.html',
  styleUrls: ['./view-dumb-comment.component.css']
})
export class ViewDumbCommentComponent implements OnInit {
  @Input() public comment: Comment;
  constructor() { }

  ngOnInit(): void {
  }

}
