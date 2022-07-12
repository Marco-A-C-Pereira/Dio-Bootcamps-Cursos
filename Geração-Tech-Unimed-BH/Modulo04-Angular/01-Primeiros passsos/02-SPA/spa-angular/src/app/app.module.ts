import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';

import { PizzaPartyComponent, SnackBarCasingComponent } from './snack-bar/snack-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnackBarCasingComponent,
    PizzaPartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
