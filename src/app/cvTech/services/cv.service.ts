import {Injectable} from '@angular/core';
import {Personne} from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[] = [];

  constructor() {
    this.personnes = [
      new Personne(0, 'Atya', 'Hazem', 22, 'hazem1.png', 123456, 'Student'),
      new Personne(1, 'Haddad', 'Nouhad', 85, 'Fayrouz.jpg', 98764, 'Singer'),
      new Personne(2, 'Targaryen', 'Danaerys', 25, 'dany.jpg', 719, 'Queen'),
      new Personne(3, 'Ben Foulen', 'Foulen', 18, '', 0, '')
    ];
  }

  getCv(): Personne[] {
    return this.personnes;
  }

  getCvById(id: number): Personne {
    return this.personnes.find(cv => cv.id === id);
  }

  deleteCv(cv: Personne): boolean {

    const index = this.personnes.indexOf(cv);
    if (index == -1) {
      return false;
    }
    this.personnes.splice(index, 1);
    return true;

  }
}
