import { Injectable } from '@angular/core';

// import for http client in service 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData():Observable<any>
  {
    return this.httpClient.get("http://localhost:8084/studentlist");
  }
}
