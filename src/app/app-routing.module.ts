import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HoodsComponent } from './components/hoods/hoods.component';
import { MarketComponent } from './components/market/market.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'all-hoods',
    component:HoodsComponent
  },
  {
    path:'market',
    component:MarketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
