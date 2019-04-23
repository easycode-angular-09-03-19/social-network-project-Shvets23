import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { LoginServerAnswer } from '../modules/auth/interfaces/LoginServerAnswer';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,    
  ) { }
  getNotification() {
    return this.http.get(`${this.apiUrl}/public/users/notification`, {
      headers: new HttpHeaders({'x-access-token':`${localStorage.getItem('sn_app_token')}`})
    });   
  }
  removeNotification(cred): Observable<LoginServerAnswer> {
    return this.http.post<LoginServerAnswer>(`${this.apiUrl}/public/users/notification`, cred);   
  }
}
