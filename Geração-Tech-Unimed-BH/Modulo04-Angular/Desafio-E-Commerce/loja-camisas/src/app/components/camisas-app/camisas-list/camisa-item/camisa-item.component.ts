import { Component, Input, OnInit } from '@angular/core';
import { Camisa } from '../model/camisa';

@Component({
  selector: 'app-camisa-item',
  templateUrl: './camisa-item.component.html',
  styleUrls: ['./camisa-item.component.css']
})
export class CamisaItemComponent implements OnInit {

  @Input()
  camisa!: Camisa;
  
  constructor() { }

  ngOnInit(): void {
  }

}
