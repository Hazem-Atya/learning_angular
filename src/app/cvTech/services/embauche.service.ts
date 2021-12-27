import {Injectable} from '@angular/core';
import {Cv} from '../Model/Cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Cv[] = [];

  constructor() {
  }

  getEmbauches(): Cv[] {
    return this.personnes;
  }

  embaucher(pers: Cv): boolean {
    const index = this.personnes.indexOf(pers);
    if (index === -1) {
      this.personnes.push(pers);
      return true;
    }
    return false;
  }
}
