import { Component, OnInit } from '@angular/core';
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";

@Component({
  moduleId: module.id,
  selector: 'games',
  templateUrl: 'games.component.html',
  styleUrls: ['games.component.css'],
  directives: [UIROUTER_DIRECTIVES]
})
export class GamesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
