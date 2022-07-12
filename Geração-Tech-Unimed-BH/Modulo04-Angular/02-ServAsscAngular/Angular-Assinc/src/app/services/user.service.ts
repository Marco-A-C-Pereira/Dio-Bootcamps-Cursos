import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi = 'https://sheet.best/api/sheets/a2b81fd8-d9cd-4aae-af25-5dfecd8d5566';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  
  //Post User Form (C)
  postUser(user:User):Observable<User> {
    return this.httpClient.post<User>( this.urlApi, user, this.httpOptions);
  }

  // Get User List (R)
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlApi);
  }

  //Del user (D)
  deleteUser(id:number):Observable<User> {
    return this.httpClient.delete<User>(`${this.urlApi}/id/${id}`)
  }

  //Edit User (E)
  updateUser(id:string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.urlApi}/id/${id}`, user, this.httpOptions)
  }

  // Usuario Unico
  getUser(id:string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.urlApi}/id/${id}`)
  }
}
