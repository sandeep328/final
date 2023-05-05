import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanComponent } from './pages/plan/plan.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DetailsComponent } from './pages/home/details/details.component';


const routes: Routes = [  
  {path:"Home",component: HomeComponent},
  {path: "testimonials",component:PlanComponent},
  {path: "reachus",component:ContactUsComponent},
  {path: "details/:id",component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
