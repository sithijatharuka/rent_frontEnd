import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiUrl = 'http://localhost:8080/api/rental';

  constructor(private http: HttpClient) {}

  getRentals(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createRental(rental: any): Observable<any> {
    return this.http.post(this.apiUrl, rental);
  }

  deleteRental(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
