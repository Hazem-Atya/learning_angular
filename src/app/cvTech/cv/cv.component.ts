import {Component, OnInit} from '@angular/core';
import {Cv} from '../Model/Cv';
import {ToastrService} from 'ngx-toastr';
import {CvService} from '../services/cv.service';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  nbClick: number = 0;
  cvs: Cv[];

  // clickedPerson: Cv;

  constructor(
    private cvService: CvService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {

    this.cvService.getCv().subscribe(
      (cvs: Cv[]) => this.cvs = cvs,
      () => {
        this.cvs = this.cvService.getFakeCv();
        this.toastr.warning('Data are fake, please contact the admin')
      }
    );
    this.toastr.info('Bienvenue dans notre cv tech :) ');
    this.cvService.selectCvSubject.pipe(distinctUntilChanged()).subscribe(
      (whoCares) => {
        this.nbClick++;
      }
    );

  }


  // getClickedPersonne(msg: any) {
  //   /*this.id = msg;
  //   alert('CV received ' + this.id);*/
  //   this.clickedPerson = msg;
  //   console.log(this.clickedPerson);
  //
  // }
}
