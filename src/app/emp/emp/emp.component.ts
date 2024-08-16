import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../service/emp.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent implements OnInit{
  employees:any=[];
  
  constructor(private empService:EmpService){

 }
  ngOnInit(): void {
    this.employees=this.empService.getEmpList();
    // alert(this.employees);
    alert(JSON.stringify(this.employees));
      
  }
}
