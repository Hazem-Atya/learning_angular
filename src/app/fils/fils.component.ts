import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Output() envoyerRequest = new EventEmitter();

  constructor() {
  }

  // méthode qui est déclenché directement aprés la création d'un composant
  ngOnInit(): void {
  }

  declencherEvenement() {
    this.envoyerRequest.emit(
      `Please can I have some money :) ?`
    );
  }
}
