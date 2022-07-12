import { ChangeContext } from '@angular-slider/ngx-slider';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { CamisaService } from './camisa-service.service';
import { Camisa } from './model/camisa';

@Component({
  selector: 'app-camisas-list',
  templateUrl: './camisas-list.component.html',
  styleUrls: ['./camisas-list.component.css'],
  animations: [ trigger ('cardFade', [
        transition(':enter', [style({ opacity:0 }), animate('1s ease-out', style ({ opacity:1 }))]),
        transition(':leave', [style({ opacity:1 }), animate('0.5s ease-out', style ({ opacity:0 }))])
      ])
  ]

})
export class CamisasListComponent implements OnInit, OnChanges {
  
  @Input() sliderParam: ChangeContext = {
    pointerType: 0,
    value: 0,
    highValue: 0
  }
  @Output() maxVal = new EventEmitter;
  maiorValor = 0;
  
  camisas: Camisa[] = []; 
  filteredCamisas: Camisa[] = [];
  camisaServices: CamisaService;

  carregado:boolean = false;


  constructor(
    private camisaService: CamisaService, 
    private element : ElementRef
    ) {

    this.camisaServices = this.camisaService ;

   }

  ngOnInit(): void {
    this.getCamisas();
  }

  ngOnChanges(): void{
    if(this.carregado) {this.filter(this.sliderParam)}
  }

  getCamisas(){
    this.camisaServices.getCamisa().subscribe({ 
      next: resp => {
      this.camisas = resp;
      this.filteredCamisas = this.camisas; 

      this.carregado =  true;
    },
    error: err => console.log("Erro: "+err),
    complete: () => this.sendMaiorValor() 
  })
  }

 sendMaiorValor (){
  for (let i of this.camisas) { if ( i.preco > this.maiorValor) this.maiorValor = i.preco }
  console.log("O maior valor é :" + this.maiorValor)
  this.maxVal.emit(this.maiorValor)
 }

 filter(filterParam: ChangeContext){
  let floor = filterParam.value;
  let ciel = filterParam.highValue;
  let arrayTemp: Camisa[] = [];

  console.log ("Triggou mudança:")
  console.log(floor);
  console.log(ciel);

  for (let camisa of this.camisas){
    if ( (camisa.preco >= floor ) && (camisa.preco <= ciel) ){
      arrayTemp.push(camisa); 
    } 
  }
  this.filteredCamisas = arrayTemp;
 }
/////////////////////////////// Animation ////////////////////////


}
