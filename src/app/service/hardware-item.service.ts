import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardwareItemService {
  private apiUrl = 'http://localhost:8080/api/hardwareitem';

  constructor(private http: HttpClient) {}

  getHardwareItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createHardwareItem(hardwareItem: any): Observable<any> {
    return this.http.post(this.apiUrl, hardwareItem);
  }

  deleteHardwareItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
