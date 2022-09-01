import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicasEmpleado',
  templateUrl: './caracteristicasEmpleado.component.html',
  styleUrls: ['./caracteristicasEmpleado.component.css']
})
export class CaracteristicasEmpleadoComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService) {

  }




  agregaCaracteristicas(value: string) {
    this.miServicio.muestraMensaje(`Se agregará la característica: ${value}`);
    this.caracteristicasEmpleados.emit(value);
  }



}

/* 

1) Inyecté el servicio --> miServicio <-- del tipo ServicioEmpleadosService, dentro del constructor.
2) Llamé miServicio dentro del método agregarCaracteristica, para que salga el cartel de alert (creado en servicio-empleados.service.ts), justo antes de emitir el valor escrito en el input.


*/