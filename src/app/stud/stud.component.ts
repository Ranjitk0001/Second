import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';
import { Student } from '../pojo/Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stud',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
   
  ],
  templateUrl: './stud.component.html',
  styleUrl: './stud.component.css'
})
export class StudComponent implements OnInit {
  student:any=[ ];

  studObj:Student=new Student();
  
  constructor(private dataService:DataService){}

  ngOnInit(): void {
   this.fillList();
  }

  fillList(){
    this.dataService.getData("students").subscribe(data=>{
      this.student=data;
      // alert(JSON.stringify(this.student));//something is wrong this reason error not fond
    });
  }

  save(){
       this.dataService.insertData("students",this.studObj).subscribe(data=>{this.fillList();alert(CommonModule)});
  }

}
