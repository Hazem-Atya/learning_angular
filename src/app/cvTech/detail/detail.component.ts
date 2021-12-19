import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../Model/Personne';
import {EmbaucheService} from '../services/embauche.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {
  }

  @Input() personne: Personne;

  ngOnInit(): void {
  }

  embaucher() {
    if (this.embaucheService.embaucher(this.personne)) {
      this.toastr.success('Cv embauché avec succés');
    } else {
      this.toastr.warning("Cv déja embauché")
    }

  }
}
