import {Component, OnInit} from '@angular/core';
import {CvService} from '../services/cv.service';
import {Personne} from '../Model/Personne';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cv-detail-page',
  templateUrl: './cv-detail-page.component.html',
  styleUrls: ['./cv-detail-page.component.css']
})
export class CvDetailPageComponent implements OnInit {

  cv: Personne;

  constructor(private cvService: CvService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.cv = this.cvService.getCvById(+id);
    });
    if (!this.cv) {
      this.router.navigate(['/cv'],{queryParams:{'qpVar':'je suis un qp'}});
    }
    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log(qp);
    });
  }

}
