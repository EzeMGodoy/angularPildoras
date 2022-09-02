import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioArrayService } from '../servicio-array.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router: Router, private miServicio: ServicioEmpleadosService, private empleadosService: ServicioArrayService) {


  }


  empleados: Empleado[] = [];

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  volverHome() {

    this.router.navigate(['']);

  }


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
    this.router.navigate(['']);
  }

}

/* 
  1) En el constructor inyecto el servicio Router porque quiero que esté disponible en el metodo "volverHome()" para enviarme al home
*/
