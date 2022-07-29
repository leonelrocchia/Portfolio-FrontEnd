import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiServerUrl = 'https://portfolio-6507g.herokuapp.com' + '/experience';

  constructor(private httpClient: HttpClient) {  }

  public list(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.apiServerUrl + '/list')
  }

  public detail(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.apiServerUrl + `/detail/${id}`);
  }

  public detailName(puesto: string): Observable<Experience>{
    return this.httpClient.get<Experience>(this.apiServerUrl + `/detail/${puesto}`);
  }

  public save(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(this.apiServerUrl + '/create', experience);
  }

  public update(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<any>(this.apiServerUrl + `/update/${id}`, experience);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.apiServerUrl + `/delete/${id}`);
  }


}
