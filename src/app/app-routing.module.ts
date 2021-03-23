import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MaintainComponent } from './maintain/maintain.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contact", component: ContactComponent},
  {path: "maintain", component: MaintainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
