import { ChangeContext } from '@angular-slider/ngx-slider';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camisas-app',
  templateUrl: './camisas-app.component.html',
  styleUrls: ['./camisas-app.component.css'],
})
export class CamisasAppComponent implements OnInit {

  maiorValor:number = 0; 

  sliderObj: ChangeContext = {
    pointerType: 0,
    value: 0,
    highValue: 0
  }

  constructor() { 
    
  }

  ngOnInit(): void {
    // console.log("O valor inicial do maior num é: " + this.maiorValor)
  }

  reciveMaiorValor (MaiNum :number ){
     this.maiorValor = MaiNum; 
    console.log ("Recebeu o maior valor: " + this.maiorValor)
  }

  reciveEventoSlider (changeContext : ChangeContext) {
    // console.log(changeContext);
    // console.log(changeContext.pointerType);
    this.sliderObj = changeContext;
  }

}
