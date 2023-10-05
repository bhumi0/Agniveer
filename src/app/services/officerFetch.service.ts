import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Officer } from '../../models/officer.model';

const baseUrl = 'http://localhost:8080/api/officers';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  constructor(private http: HttpClient) { }

  validateLogin(userCredential: any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("password",userCredential.password);
    return this.http.get<Officer>(`${baseUrl}/${userCredential.id}`,{params: queryParams});
  }

  addOffr(data:any): Observable<any> {
    return this.http.post(`${baseUrl}`, data);
  }

  getOffrList():Observable<any> {
    return this.http.get<Officer[]>(`${baseUrl}`);
  }

  updateOffr(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteOffrById(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}