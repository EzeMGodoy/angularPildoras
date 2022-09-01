import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ServicioArrayService } from '../servicio-array.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  titulo = 'Lista Empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: ServicioArrayService) {

    // this.empleados = this.empleadosService.empleados;


  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];


  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestraMensaje(`Vas a agregar al empleado: ${miEmpleado.nombre} ${miEmpleado.apellido}`);
    // this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    this.cuadroNombre = '';
    this.cuadroApellido = '';
    this.cuadroCargo = '';
    this.cuadroSalario = 0;
  }

}

/* 

1) Inyecté el servicio --> miServicio <-- del tipo ServicioEmpleadosService, dentro del constructor.
2) Llamé miServicio dentro del método agregarEmpleado, para que salga el cartel de alert, justo antes de pushear el empleado.


Lo mismo con el servicio empleadosService

*/
