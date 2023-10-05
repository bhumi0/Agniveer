import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrator } from '../../models/officer.model';

const baseUrl = 'http://localhost:8080/api/admin';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient) { }

  validateLogin(userCredential:any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",userCredential.id).append("password",userCredential.password);

    return this.http.get<Administrator>(`${baseUrl}`,{params: queryParams});
  }

}