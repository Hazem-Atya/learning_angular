import {Component, OnInit} from '@angular/core';
import {Personne} from '../Model/Personne';
import {PremierService} from '../../premier.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[];
  clickedPerson: Personne;

  constructor(private  premierService: PremierService,
              private  toastr :ToastrService) {
  }

  ngOnInit(): void {
    this.personnes = [
      new Personne(0, 'Atya', 'Hazem', 22, 'hazem1.png', 123456, 'Student'),
      new Personne(1, 'Haddad', 'Nouhad', 85, 'Fayrouz.jpg', 98764, 'Singer'),
      new Personne(2, 'Targaryen', 'Danaerys', 25, 'dany.jpg', 719, 'Queen'),
      new Personne(3, 'Ben Foulen', 'Foulen', 18, '', 0, '')
    ]
    ;
    this.premierService.addData('data from cv component');
    this.premierService.logger(this.personnes);
    this.toastr.info("Bienvenue dans notre cv tech :) ")

  }


  getClickedPersonne(msg: any) {
    /*this.id = msg;
    alert('CV received ' + this.id);*/
    this.clickedPerson = msg;
    console.log(this.clickedPerson);

  }
}
