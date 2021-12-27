import { Component, OnInit } from '@angular/core';
import {Cv} from '../Model/Cv';
import {EmbaucheService} from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  personnesEmbauches:Cv[];
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.personnesEmbauches=this.embaucheService.getEmbauches();
  }

}
