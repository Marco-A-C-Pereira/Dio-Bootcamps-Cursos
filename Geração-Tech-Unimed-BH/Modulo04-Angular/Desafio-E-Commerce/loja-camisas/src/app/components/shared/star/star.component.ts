import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input()
  rating:number = 0;

  starWidith:number = 0;

  constructor() { }

  ngOnChanges(): void {
    this.starWidith = this.rating * 74 / 5 ;
  }

}
