import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from '../Model/Cv';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  constructor(
    private cvService: CvService
  ) {
  }

  @Input() cv: Cv;
  @Input() size = 50;

  // @Output() envoyerToList = new EventEmitter();


  ngOnInit(): void {
  }

  selectCv() {
    this.cvService.selectItem(this.cv);
    // this.envoyerToList.emit(this.personne);
  }
}
