import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HoodsComponent } from './components/hoods/hoods.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'all-hoods',
    component:HoodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
