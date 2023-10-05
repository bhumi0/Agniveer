import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agniveer } from '../../models/agniveer.model';

const baseUrl = 'http://localhost:8080/api/agniveer';

@Injectable({
  providedIn: 'root'
})
export class AgniveerService {

  constructor(private http: HttpClient) { }

  addAgniveer(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateAgniveer(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  getAgniveerList(): Observable<any> {
    return this.http.get<Agniveer[]>(baseUrl);
  }

  deleteAgniveer(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getAgniveerById(id:number): Observable<any> {
    return this.http.get<Agniveer>(`${baseUrl}/${id}`);
  }
}