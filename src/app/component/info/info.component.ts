import { Component, OnInit } from '@angular/core';
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";

@Component({
  moduleId: module.id,
  selector: 'info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css'],
  directives: [UIROUTER_DIRECTIVES]
})
export class InfoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
