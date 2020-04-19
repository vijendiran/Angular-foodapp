import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HeaderComponent} from './header/header.component'
import{FoodsComponent} from './foods/foods.component';
import{FoodlistComponent} from './foodlist/foodlist.component';
const routes: Routes = [

  {
    path:'list',
    component:FoodsComponent
  },
  {
    path:'food',
    component:FoodlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
