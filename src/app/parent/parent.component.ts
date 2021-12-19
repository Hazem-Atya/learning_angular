import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {

  constructor() {
  }

  name = 'hazem Atya';

  ngOnInit(): void {


  }

  processReq(msg: any) {
    alert(msg);
  }

}
