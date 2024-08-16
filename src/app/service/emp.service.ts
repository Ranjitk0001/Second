import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  getEmpList(){
    return[
      {"eno":100, "ename":"Sachin", "salary":15000},
      {"eno":102, "ename":"Ranjit", "salary":6500},
      {"eno":103, "ename":"Jayraj", "salary":900},
    ]
  }
}
