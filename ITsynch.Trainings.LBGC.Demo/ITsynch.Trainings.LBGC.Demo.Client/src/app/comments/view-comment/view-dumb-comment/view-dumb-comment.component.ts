import { Component, Input, OnInit } from '@angular/core';
import { Comments } from '../../comments.model';

@Component({
  selector: 'its-view-dumb-comment',
  templateUrl: './view-dumb-comment.component.html',
  styleUrls: ['./view-dumb-comment.component.css']
})
export class ViewDumbCommentComponent implements OnInit {
  @Input() public comment: Comments;
  constructor() { }

  ngOnInit(): void {
  }

}
