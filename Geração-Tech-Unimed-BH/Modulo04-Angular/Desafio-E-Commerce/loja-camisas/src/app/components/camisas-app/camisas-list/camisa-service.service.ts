import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Camisa } from './model/camisa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamisaService {
  private url = 'http://localhost:3000/camisas';

  httpOptions = {
    Headers: new HttpHeaders ({'content-type': 'application/json'})
  }   
  
  constructor(private httpClient: HttpClient) { }

  getCamisa(): Observable<Camisa[]>{
    return this.httpClient.get<Camisa[]>(this.url) 
  }
}
