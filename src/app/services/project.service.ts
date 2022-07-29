import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiServerUrl = 'https://portfolio-6507g.herokuapp.com' + '/project';

  constructor(private httpClient: HttpClient) { }

  
  public list(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.apiServerUrl + '/list');
  }

  public detail(id: number): Observable<Project>{
    return this.httpClient.get<Project>(this.apiServerUrl + `/detail/${id}`);
  }

  public detailName(proyecto: string): Observable<Project>{
    return this.httpClient.get<Project>(this.apiServerUrl + `/detail/${proyecto}`);
  }

  public save(project: Project): Observable<any> {
    return this.httpClient.post<any>(this.apiServerUrl + '/create', project);
  }

  public update(id: number, project: Project): Observable<any> {
    return this.httpClient.put<any>(this.apiServerUrl + `/update/${id}`, project);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.apiServerUrl + `/delete/${id}`);
  }

}
