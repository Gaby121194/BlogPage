import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'its-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css'],
})
export class PageContainerComponent implements OnInit {
  @Input()
  title = '';

  constructor() {}

  ngOnInit(): void {}
}
