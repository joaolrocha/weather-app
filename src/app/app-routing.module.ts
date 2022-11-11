import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentPage } from 'src/pages/home/home.component.page';
import { FavoratiesComponentPage } from 'src/pages/favoraties/favoraties.component.page';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentPage },
  { path: 'myfavorite', component: FavoratiesComponentPage }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
