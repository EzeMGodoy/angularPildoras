import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  titulo = 'Registro de Usuarios';
  mensaje: string = '';
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  registrado: boolean = false;
  entradas: any;


  registrarUsuario(): void {
    this.nombre = this.nombre;
    this.apellido = this.apellido;
    this.cargo = this.cargo.charAt(0).toUpperCase() + this.cargo.slice(1);
    this.registrado = true;
  }

  constructor() {
    this.entradas = [

      { titulo: 'Python cada día más presente' },
      { titulo: 'Java presente desde hace más de 20 años' },
      { titulo: 'JS cada vez más funcional' },
      { titulo: 'Kotlin potencia para tus Apps' },
      { titulo: 'Dónde quedó Pascal?' },
    ];
  }




}
