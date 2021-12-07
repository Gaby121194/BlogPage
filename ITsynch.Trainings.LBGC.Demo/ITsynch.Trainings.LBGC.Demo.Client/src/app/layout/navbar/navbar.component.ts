import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'its-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Output()
  clicked = new EventEmitter<void>();

  @Input()
  leftItem: TemplateRef<any> = null;

  constructor() {}

  onButtonClick() {
    this.clicked.emit();
  }
}
