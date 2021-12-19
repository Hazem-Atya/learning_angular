import {Component, OnInit} from '@angular/core';
import {Personne} from '../Model/Personne';
import {ToastrService} from 'ngx-toastr';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[];
  clickedPerson: Personne;

  constructor(
    private  cvService: CvService,
    private  toastr: ToastrService) {
  }

  ngOnInit(): void {

  this.personnes=this.cvService.getCv();
    this.toastr.info('Bienvenue dans notre cv tech :) ');

  }


  getClickedPersonne(msg: any) {
    /*this.id = msg;
    alert('CV received ' + this.id);*/
    this.clickedPerson = msg;
    console.log(this.clickedPerson);

  }
}
