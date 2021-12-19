import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/Personne';
import {EmbaucheService} from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  personnesEmbauches:Personne[];
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.personnesEmbauches=this.embaucheService.getEmbauches();
  }

}
