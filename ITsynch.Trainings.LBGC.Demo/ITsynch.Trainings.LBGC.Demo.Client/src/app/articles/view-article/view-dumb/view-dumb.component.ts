import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Article } from '../../articles.model';

@Component({
  selector: 'its-view-dumb',
  templateUrl: './view-dumb.component.html',
  styleUrls: ['./view-dumb.component.css']
})
export class ViewDumbComponent implements OnInit{
  @Input() public article: Article;
  constructor() { }

  ngOnInit(): void {
  }

  

}
