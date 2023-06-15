import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatedraticosComponent } from './componente/catedraticos/catedraticos.component';
import { AlumnosComponent } from './componente/alumnos/alumnos.component';
import { AdministradoresComponent } from './componente/administradores/administradores.component';

@NgModule({
  declarations: [
    AppComponent,
    CatedraticosComponent,
    AlumnosComponent,
    AdministradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
