import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamisasAppComponent } from './components/camisas-app/camisas-app.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: 'produtos', component: CamisasAppComponent},
  {path: 'carrinho', component: CartComponent},
  {path: '', redirectTo: 'produtos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
