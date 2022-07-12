import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * @title Snack-bar with a custom component
 */

@Component({
  selector: 'snack-bar-component',
  templateUrl: 'snack-bar.component.html',
  styleUrls: ['snack-bar.component.css'],
})
export class SnackBarCasingComponent {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'snack-bar-component-snack',
  templateUrl: 'snack-bar-content.component.html',
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})

export class PizzaPartyComponent {}