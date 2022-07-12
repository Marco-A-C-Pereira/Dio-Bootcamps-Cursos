import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ass-pipes-exp',
  templateUrl: './pipes-exp.component.html',
  styleUrls: ['./pipes-exp.component.css']
})
export class PipesExpComponent implements OnInit {
  number = 0;
  text = 'Yoyoyo ! World';
  date = new Date;
  amogus = {
    nome: 'Amogus',
    idade: 99,
    role: 'engi'
  }

  crewmates = ['red'];

  constructor() { }

  ngOnInit(): void {
  } 

  changeVal() {
    this.number = 5555;
  }

  add(text : string) {
    this.crewmates.push(text);
  }
}
