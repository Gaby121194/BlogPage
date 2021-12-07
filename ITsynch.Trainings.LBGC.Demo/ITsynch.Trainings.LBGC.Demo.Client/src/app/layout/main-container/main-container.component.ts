import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'its-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent {
  sidebarState = false;

  @Input()
  leftToolbarItemTemplate: TemplateRef<any> = null;

  onNavbarButtonClicked() {
    this.sidebarState = !this.sidebarState;
  }

  constructor() {}
}
