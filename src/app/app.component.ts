import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { UIROUTER_DIRECTIVES, UIRouter } from 'ui-router-ng2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [UIROUTER_DIRECTIVES, NgClass],
  providers: [UIRouter]
})
export class AppComponent {
  isCollapsed:boolean = true;

}
