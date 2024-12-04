import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentDetailsService {
  private apiUrl = 'http://localhost:8080/api/rentdetails';

  constructor(private http: HttpClient) {}

  getRentDetails(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createRentDetails(rentDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, rentDetails);
  }

  deleteRentDetails(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
