import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Personne} from '../Model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() {
  }

  @Input() personne: Personne;
  @Output() envoyerToList = new EventEmitter();


  ngOnInit(): void {
  }

  declencherItemEvent() {
    this.envoyerToList.emit(this.personne);
  }
}
