import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from './screens/home/home.component';
import { CollaborationsComponent } from './screens/collaborations/collaborations.component';
import { AboutComponent2 } from './components/about2/about2.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 { path: 'collaborations', component: CollaborationsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
