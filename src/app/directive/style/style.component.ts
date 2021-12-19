import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  @Input() color = 'aqua';
  @Input() backgroundColor = 'black';
  size = '25px';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSize(sizeInput) {
    this.size = sizeInput + 'px';
  }
}
