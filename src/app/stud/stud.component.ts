import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stud.component.html',
  styleUrl: './stud.component.css'
})
export class StudComponent implements OnInit {
  student:any=[ ];
  constructor(private dataService:DataService){}

  ngOnInit(): void {
      this.dataService.getData().subscribe(data=>{
        this.student=data;
        alert(JSON.stringify(this.student));
      });
  }

}
