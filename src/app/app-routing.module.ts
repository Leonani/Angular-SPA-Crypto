import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './views/detail/detail.component';
import { HomeComponent } from './views/home/home.component';
import {LandingComponent} from './views/landing/landing.component'

const routes: Routes = [
  {path:'', redirectTo:'landing', pathMatch:'full'},
  {path:'landing', component:LandingComponent},
  {path:'home', component:HomeComponent},
  {path:'detail/:id', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingComponent, HomeComponent, DetailComponent]
