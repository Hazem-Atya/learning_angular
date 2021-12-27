import {Injectable} from '@angular/core';
import {Cv} from '../Model/Cv';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  selectCvSubject = new Subject<Cv>();


  private personnes: Cv[] = [];

  constructor() {
    this.personnes = [
      new Cv(0, 'Atya', 'Hazem', 22, 'hazem1.png', 123456, 'Student'),
      new Cv(1, 'Haddad', 'Nouhad', 85, 'Fayrouz.jpg', 98764, 'Singer'),
      new Cv(2, 'Targaryen', 'Danaerys', 25, 'dany.jpg', 719, 'Queen'),
      new Cv(3, 'Ben Foulen', 'Foulen', 18, '', 0, '')
    ];
  }

  getCv(): Cv[] {
    return this.personnes;
  }

  getCvById(id: number): Cv {
    return this.personnes.find(cv => cv.id === id);
  }

  deleteCv(cv: Cv): boolean {

    const index = this.personnes.indexOf(cv);
    if (index == -1) {
      return false;
    }
    this.personnes.splice(index, 1);
    return true;
  }

  selectItem(cv: Cv): void {
    this.selectCvSubject.next(cv);
  }
}
