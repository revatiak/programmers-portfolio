import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfessionalSectionComponent } from './professional-section/professional-section.component';

const routes: Routes = [
  { path: 'personal-component', component:  AppComponent},
  { path: 'professional-component', component:  ProfessionalSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
