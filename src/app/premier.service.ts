import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PremierService {
  data = [
    'data1',
    'data2',
    'data3',
    'data4'
  ];

  constructor() {
  }

  logger(data: any) {
    console.log(this.data);
    console.log(data);
  }

  addData(data) {
    this.data.push(data);
  }
}
