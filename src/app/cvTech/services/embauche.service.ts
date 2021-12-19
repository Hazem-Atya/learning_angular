import {Injectable} from '@angular/core';
import {Personne} from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne[] = [];

  constructor() {
  }

  getEmbauches(): Personne[] {
    return this.personnes;
  }

  embaucher(pers: Personne): boolean {
    const index = this.personnes.indexOf(pers);
    if (index === -1) {
      this.personnes.push(pers);
      return true;
    }
    return false;
  }
}
