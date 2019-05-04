import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { LoginServerAnswer } from '../../auth/interfaces/LoginServerAnswer';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,    
  ) { }
  getNotification() {
    return this.http.get(`${this.apiUrl}/public/users/notification`);   
  }
}
