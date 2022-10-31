import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AccInfo } from './acc-info';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccServiceService {
  url = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  createAccount(accinfo: AccInfo): Observable<AccInfo> {
    return this.http.post<AccInfo>(this.url + 'api/register', accinfo);
  }
}
