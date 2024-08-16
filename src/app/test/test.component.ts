import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  uname:string="Ranjit Kale" 
  flag1:boolean=true;
  flag2:boolean=false;

  constructor(){

  }

  ngOnInit(): void {
      
  }

  myfun(){
    alert("Hiii");
    this.uname="Sachin Patil"
  }

}
