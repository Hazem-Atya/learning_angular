import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor() {
  }

  @Input() personnes;
  @Output() envoyerToCv = new EventEmitter();

  ngOnInit(): void {
  }

  declencherListeEvent(msg: any) {
    this.envoyerToCv.emit(msg);
    }
}
