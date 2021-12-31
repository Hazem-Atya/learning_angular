import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginResponseDto} from './DTOs/login-response.dto';
import {CONSTANTES} from '../config/constantes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(credentials):Observable<LoginResponseDto> {
      return this.http.post<LoginResponseDto>(CONSTANTES.apis.login,credentials);
  }
  logout() {
    localStorage.removeItem("token");
  }

  isAuthentificated():boolean {
    return !!localStorage.getItem('token');
  }
}
