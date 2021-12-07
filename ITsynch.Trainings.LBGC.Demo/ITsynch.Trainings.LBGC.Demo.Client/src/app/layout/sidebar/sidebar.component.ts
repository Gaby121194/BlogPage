import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { ITSYNCH_TRAININGS_DEMO_SIDEBAR_ITEMS } from 'src/app/app.tokens';
import { SidebarItem } from '../layout.models';

@Component({
  selector: 'its-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  private _opened = false;

  @Input()
  set opened(value: boolean) {
    this._opened = value;
    this.openedChange.emit(this._opened);
  }

  get opened() {
    return this._opened;
  }

  @Output()
  openedChange = new EventEmitter<boolean>();

  toggle() {
    this.opened = !this.opened;
  }

  constructor(
    @Inject(ITSYNCH_TRAININGS_DEMO_SIDEBAR_ITEMS) @Optional() public sidebarItems?: SidebarItem[]
  ) {}
}
