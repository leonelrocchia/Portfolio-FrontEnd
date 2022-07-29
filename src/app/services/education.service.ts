import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiServerUrl = 'https://portfolio-6507g.herokuapp.com' + '/education';
  
  constructor(private httpClient: HttpClient) { }


  public list(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.apiServerUrl + '/list');
  }

  public detail(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.apiServerUrl + `/detail/${id}`);
  }

  public detailName(titulo: string): Observable<Education>{
    return this.httpClient.get<Education>(this.apiServerUrl + `/detail/${titulo}`);
  }

  public save(education: Education): Observable<any> {
    return this.httpClient.post<any>(this.apiServerUrl + '/create', education);
  }

  public update(id: number, education: Education): Observable<any> {
    return this.httpClient.put<any>(this.apiServerUrl + `/update/${id}`, education);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.apiServerUrl + `/delete/${id}`);
  }

}
