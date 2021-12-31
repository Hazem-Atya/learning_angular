import {Injectable} from '@angular/core';
import {Cv} from '../Model/Cv';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CONSTANTES} from '../../config/constantes';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  selectCvSubject = new Subject<Cv>();


  private personnes: Cv[] = [];

  constructor(private http: HttpClient) {

  }

  getCv(): Observable<Cv[]> {
      return this.http.get<Cv[]>(CONSTANTES.apis.cv);
  }

  getCvById(id: number): Observable<Cv> {
 /*   const token= localStorage.getItem('token');
    const headers= new HttpHeaders().append('Authorization',`Bearer ${token}`);
*/    return this.http.get<Cv>(CONSTANTES.apis.cv + id);
  }
  deleteCvById(id:number)
  {
    // const params= new HttpParams();
    // params.set('',localStorage.getItem('token'));
     return this.http.delete<Cv>(CONSTANTES.apis.cv + id);
  }
  getFakeCv(): Cv[] {
    return [
      new Cv(0, 'Atya', 'Hazem', 22, 'hazem1.png', 123456, 'Student'),
      new Cv(1, 'Haddad', 'Nouhad', 85, 'Fayrouz.jpg', 98764, 'Singer'),
      new Cv(2, 'Targaryen', 'Danaerys', 25, 'dany.jpg', 719, 'Queen'),
      new Cv(3, 'Ben Foulen', 'Foulen', 18, '', 0, '')
    ];
  }

  getFakeCvById(id: number): Cv {
    return this.personnes.find(cv => cv.id === id);
  }

  deleteFakeCv(cv: Cv): boolean {

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
