import {Component, Input, OnInit, Output} from '@angular/core';
import {Cv} from '../Model/Cv';
import {EmbaucheService} from '../services/embauche.service';
import {ToastrService} from 'ngx-toastr';
import {CvService} from '../services/cv.service';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
  }

  // @Input()
  @Output() cv: Cv;

  ngOnInit(): void {
    this.cvService.selectCvSubject.pipe(distinctUntilChanged()).subscribe(
      (cv: Cv) => {
        this.cv = cv;
      }
    );
  }

  embaucher() {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toastr.success('Cv embauché avec succés');
    } else {
      this.toastr.warning('Cv déja embauché');
    }

  }
}
