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

  constructor(){

  }

  ngOnInit(): void {
      
  }

}
