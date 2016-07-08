import { Component, OnInit } from '@angular/core';
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";

@Component({
  moduleId: module.id,
  selector: 'assets',
  templateUrl: 'assets.component.html',
  styleUrls: ['assets.component.css'],
  directives: [UIROUTER_DIRECTIVES]
})
export class AssetsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
