import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PremierService} from '../premier.service';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Output() envoyerRequest = new EventEmitter();

  constructor(private premierService: PremierService) {
  }

  // méthode qui est déclenché directement aprés la création d'un composant
  ngOnInit(): void {
    this.premierService.logger('Je suis le fils');
  }

  declencherEvenement() {
    this.envoyerRequest.emit(
      `Please can I have some money :) ?`
    );
  }
}
