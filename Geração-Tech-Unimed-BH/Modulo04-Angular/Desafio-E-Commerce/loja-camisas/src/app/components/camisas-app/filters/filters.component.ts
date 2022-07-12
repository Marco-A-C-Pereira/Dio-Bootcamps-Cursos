import { ChangeContext, LabelType, Options, PointerType } from '@angular-slider/ngx-slider';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnChanges {
  @Input() maiorValor:number = 0;
  @Output() sliderEvento = new EventEmitter

  minVal:number = 0;
  maxVal:number = 0; 
  // (Depois passar o maior valor de produto como param e arredondar para cima ?)
  options: Options = {
    floor: 0,
    ceil: 0,
    step: 50,
    noSwitching: true,
    translate: (value: number, label : LabelType): string => {
      switch (label) {
        case LabelType.Low:
          this.minVal = value; // Isso pode causar problemas quando pegar o valor do produto ? 
          //console.log("O valor min é:" + this.minVal)
          return "<b>Min Price:</b> $" + value;
        case LabelType.High:
          this.maxVal = value; // Isso pode causar problemas quando pegar o valor do produto ? 
          //console.log("O valor max é:" + this.maxVal)
          return "<b>Max Price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  constructor(private CD: ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }
  
  ngOnChanges(): void {
    if (this.maiorValor){
      this.mudaValores(this.maiorValor);
      this.CD.detectChanges();
    }
  }

    mudaValores(maiVal : number){
    this.maxVal = maiVal;
    this.options = { ...this.options, ceil: maiVal }
  }

  // Metodos do slider:
  onUserChangeEnd(changeContext:ChangeContext) {
    return this.sliderEvento.emit(changeContext);
  }

}
