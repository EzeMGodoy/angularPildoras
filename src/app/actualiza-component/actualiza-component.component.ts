import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioArrayService } from '../servicio-array.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private miServicio: ServicioEmpleadosService, private empleadosService: ServicioArrayService) {


  }


  empleados: Empleado[] = [];

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;

    this.indice = this.route.snapshot.params['id']; //el empleado q viene por URL lo almaceno en this.indice

    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice); //Contruyo un objeto del tipo empleado

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome() {

    this.router.navigate(['']);

  }


  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;



  actualizaEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

    this.router.navigate(['']);


    /* this.cuadroNombre = '';
    this.cuadroApellido = '';
    this.cuadroCargo = '';
    this.cuadroSalario = 0; */
  }


  indice: number;


}


/* 
  En el constructor agregué Router, para poder usar los path escritos en app.module.ts
  Ademas agregué activatedRoute, para cargar las rutas acticas
  Agregué la variable indice (linea 53 ish) que es la que alojará el indice del empleado. Luego lo llamo dentro de la expresion OnInit
*/