import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { user } from '../modules/user/interfaces/user.interface'
import { GlobalAuthService } from './global-auth.service';
import { CurrentUserStoreService } from './current-user-store.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService,
    private currentUser: CurrentUserStoreService
  ) { }
  getUserById(id: string): Observable<user> {
    return this.http.get<user>(`${this.apiUrl}/public/users/get-info/${id}`).pipe(
      map((user: user) => {
        if (user._id === this.globalAuth.userId) {
          this.currentUser.info = user;
        }
        return user;
      })
    )
  }
  uploadCover(file: File): Observable<any> {
    const id = this.globalAuth.userId;
    const formData = new FormData();
    formData.append('coverImg', file);
    return this.http.post(`${this.apiUrl}/public/users/upload-cover/${id}`, formData)
  }
  getImages(id: string) {
    return this.http.get(`${this.apiUrl}/public/users/my-images/${id}`)
  }
}
