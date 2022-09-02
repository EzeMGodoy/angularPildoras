import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoHijoComponent } from './empleadoHijo/empleadoHijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicasEmpleado/caracteristicasEmpleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { ServicioArrayService } from './servicio-array.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponentComponent },
  { path: 'proyectos', component: ProyectosComponentComponent },
  { path: 'quienes', component: QuienesComponentComponent },
  { path: 'contacto', component: ContactoComponentComponent },
  { path: 'actualiza/:id', component: ActualizaComponentComponent }

];




@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    EmpleadoComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, ServicioArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
