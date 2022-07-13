import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CamisasAppComponent } from './components/camisas-app/camisas-app.component';
import { FiltersComponent } from './components/camisas-app/filters/filters.component';
import { CamisasListComponent } from './components/camisas-app/camisas-list/camisas-list.component';
import { CamisaItemComponent } from './components/camisas-app/camisas-list/camisa-item/camisa-item.component';
import { CamisaService } from './components/camisas-app/camisas-list/camisa-service.service';
import { StarComponent } from './components/shared/star/star.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    CamisasAppComponent,
    FiltersComponent,
    CamisasListComponent,
    CamisaItemComponent,
    StarComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    NgxSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CamisaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
