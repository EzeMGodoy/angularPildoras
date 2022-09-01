import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ServicioArrayService } from '../servicio-array.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'Mini Calculadora';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  nombreFactor: string = '';
  simboloFactor!: string;
  titulo = 'Lista Empleados';


  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: ServicioArrayService) {

    // this.empleados = this.empleadosService.empleados;

  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
    this.nombreFactor = 'sumar';
    this.simboloFactor = '+';

  }

  restar(): void {
    if (this.numero1 == 0 || this.numero2 == 0) {
      return alert('Escribe un numero');

    } else {
      this.resultado = this.numero1 - this.numero2;
      this.nombreFactor = 'restar';
      this.simboloFactor = '-';

    }
  }

  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
    this.nombreFactor = 'multiplicar';
    this.simboloFactor = '*';
  }
  dividir(): void {
    this.resultado = this.numero1 / this.numero2;
    this.nombreFactor = 'dividir';
    this.simboloFactor = '/';
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
