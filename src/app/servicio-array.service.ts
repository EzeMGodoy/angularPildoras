import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioArrayService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {


  }

  empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 7500),
    new Empleado('Ana', 'Martin', 'Directora', 5500),
    new Empleado('Maria', 'Fernandez', 'Jefa seccion', 3500),
    new Empleado('Laura', 'Lopez', 'Administrativo', 2500),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(`Se agregará a la lista de empleados:
    Nombre: ${empleado.nombre} 
    Salario: $${empleado.salario}`);

    this.empleados.push(empleado);
  }
}
