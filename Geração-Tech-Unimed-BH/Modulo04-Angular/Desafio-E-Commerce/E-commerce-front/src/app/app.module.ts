import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { EcommerceAppComponent } from './components/ecommerce-app/ecommerce-app.component';
import { FiltersComponent } from './components/Ecommerce-app/filters/filters.component';
import { ProductListComponent } from './components/Ecommerce-app/product-list/product-list.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductItemComponent } from './components/ecommerce-app/product-list/product-item/product-item.component';
import { CamisasService } from './components/ecommerce-app/product-list/camisas.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    EcommerceAppComponent,
    FiltersComponent,
    ProductListComponent,
    FooterComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CamisasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
