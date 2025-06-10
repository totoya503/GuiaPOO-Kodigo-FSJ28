import { Persona } from "./Persona";



export class Empleado extends Persona {
  private sueldo: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  cargarSueldo(monto: number){
    this.sueldo = monto;
  }

  imprimirSueldo(){
    console.log(`Sueldo: $${this.sueldo}`);
  }

  mostrarDatos(){
    console.log(`Nombre: ${this.nombre} ${this.apellido}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Edad: ${this.edad}`);
  }
}