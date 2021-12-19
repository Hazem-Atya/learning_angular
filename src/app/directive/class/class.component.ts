import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() {
  }
  teams = [
    'est',
    'ess',
    'barca',
    'milan'
  ];
  myInfo = {
    'first name': 'Hazem',
    'last name': 'Atya',
    age: 22,
  };


  show = true;

  est = false;
  barca = false;
  milan = true;

  ngOnInit(): void {
  }

  mkache5() {
    this.est = true;
    this.milan = false;
    this.barca = false;
  }
}
