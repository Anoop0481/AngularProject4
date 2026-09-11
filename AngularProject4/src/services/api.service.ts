import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl =
    'https://localhost:7189/api';

  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData) {
    return this.http.post(
      `${this.apiUrl}/upload`,
      formData);
  }

  getRecords() {
    return this.http.get<any[]>(
      `${this.apiUrl}/records`);
  }

  getRecordsByJob(jobId: string) {
    return this.http.get<any[]>(
      `${this.apiUrl}/records/${jobId}`);
  }
}
