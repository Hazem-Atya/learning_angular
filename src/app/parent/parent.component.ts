import {Component, OnInit} from '@angular/core';
import {PremierService} from '../premier.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers : [PremierService]
})
export class ParentComponent implements OnInit {

  constructor(private  premierService: PremierService) {
  }

  name = 'hazem Atya';

  ngOnInit(): void {


  }

  processReq(msg: any) {
    alert(msg);
  }
  clickedButton(){
    this.premierService.logger(this.name);
  }
}
