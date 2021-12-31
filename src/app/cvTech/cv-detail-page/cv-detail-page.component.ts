import {Component, OnInit} from '@angular/core';
import {CvService} from '../services/cv.service';
import {Cv} from '../Model/Cv';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cv-detail-page',
  templateUrl: './cv-detail-page.component.html',
  styleUrls: ['./cv-detail-page.component.css']
})
export class CvDetailPageComponent implements OnInit {

  cv: Cv;

  constructor(private cvService: CvService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
        const id = params['id'];
        this.cvService.getCvById(+id).subscribe(
          (cv: Cv) => {
            this.cv = cv;
          }
        );
      },
      () => {
        if (!this.cv) {
          this.router.navigate(['/cv'], {queryParams: {'qpVar': 'je suis un qp'}});
        }
      }
    );

    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log(qp);
    });
  }

  delete() {
    this.cvService.deleteCvById(this.cv.id).subscribe(
      () => {
        this.router.navigate(['/cv']);
        this.toastr.success('Cv supprimé avec succés');
      },
      (erreur) => {
        console.log(erreur);
        this.toastr.error(`problème système. Merci de contacter l'admin`);
      }
    );
  }
}
