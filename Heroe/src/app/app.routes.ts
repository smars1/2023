import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './componentes/error404/error404.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';

const APP_ROUTES : Routes = [
  { path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'error404', component: Error404Component},
  { path: '**', pathMatch: 'full', redirectTo: 'error404'}

]

// investigar useHash que : este te separa la ruta del path de redireccion con un #/
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
