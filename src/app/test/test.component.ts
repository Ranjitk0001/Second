import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
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

}
