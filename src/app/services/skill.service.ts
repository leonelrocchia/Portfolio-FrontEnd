import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  private apiServerUrl = 'https://portfolio-6507g.herokuapp.com' + '/skill';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.apiServerUrl + '/list');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.apiServerUrl + `/detail/${id}`);
  }

  public detailName(skill: string): Observable<Skill>{
    return this.httpClient.get<Skill>(this.apiServerUrl + `/detail/${skill}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.apiServerUrl + '/create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.apiServerUrl + `/update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.apiServerUrl + `/delete/${id}`);
  }

}
