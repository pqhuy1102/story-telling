// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { LOCAL_DOMAIN } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // Fetch all users
//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.apiUrl);
//   }

  // Fetch a single user by ID
//   getUserById(userId: number): Observable<User> {
//     const url = `${this.apiUrl}/${userId}`;
//     return this.http.get<User>(url);
//   }

  // Create a new user
//   createUser(user: User): Observable<User> {
//     return this.http.post<User>(this.apiUrl, user);
//   }

//   // Update an existing user
//   updateUser(user: User): Observable<User> {
//     const url = `${this.apiUrl}/${user.id}`;
//     return this.http.put<User>(url, user);
//   }

//   // Delete a user by ID
//   deleteUser(userId: number): Observable<void> {
//     const url = `${this.apiUrl}/${userId}`;
//     return this.http.delete<void>(url);
//   }

    register(user: User): Observable<any>{
        const url = `${LOCAL_DOMAIN}/Auth/register`;
        return this.http.post<User>(url, user);
    }
}
