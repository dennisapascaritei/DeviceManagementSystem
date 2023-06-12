import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "User"
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}`);
  }
  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/${this.url}/${id}`);
  }
  public createUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/${this.url}`, newUser);
  }
  public updateUser(updatedUser: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/${this.url}`, updatedUser);
  }
  public deleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(`${environment.apiUrl}/${this.url}/${id}`);
  }
}
