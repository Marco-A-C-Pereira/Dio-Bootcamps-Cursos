import { Component, OnInit } from '@angular/core';
import { CamisasService } from './camisas.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private camisasService : CamisasService) { }

  ngOnInit(): void {
    

  }


}
