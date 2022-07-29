import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiServerUrl = 'https://portfolio-6507g.herokuapp.com' + '/auth';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.apiServerUrl + '/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.apiServerUrl + '/login', loginUsuario);
  }
}
