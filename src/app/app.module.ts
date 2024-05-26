import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//angular material
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
//screens
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobreMiScreenComponent } from './screens/sobre-mi-screen/sobre-mi-screen.component';
import { ProyectosScreenComponent } from './screens/proyectos-screen/proyectos-screen.component';
import { ContactoScreenComponent } from './screens/contacto-screen/contacto-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SobreMiScreenComponent,
    ProyectosScreenComponent,
    ContactoScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
