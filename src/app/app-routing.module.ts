import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { SobreMiScreenComponent } from './screens/sobre-mi-screen/sobre-mi-screen.component';
import { ProyectosScreenComponent } from './screens/proyectos-screen/proyectos-screen.component';
import { ContactoScreenComponent } from './screens/contacto-screen/contacto-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'sobre-mi', component: SobreMiScreenComponent, pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosScreenComponent, pathMatch: 'full' },
  { path: 'contacto', component: ContactoScreenComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
