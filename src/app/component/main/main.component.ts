import { Component, OnInit } from '@angular/core';
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  directives: [UIROUTER_DIRECTIVES]
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
