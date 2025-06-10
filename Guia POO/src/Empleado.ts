import { Persona } from "./Persona";



export class Empleado extends Persona {
private sueldo: number;

constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
}

//Reasigna el sueldo del empleado
cargarSueldo(monto: number){
    this.sueldo = monto;
}

//Muestra el sueldo
imprimirSueldo(){
    console.log(`Sueldo: $${this.sueldo}`);
}

//Muestra los datos del empleado
mostrarDatos(){
    console.log(`Nombre: ${this.nombre} ${this.apellido},
Dirección: ${this.direccion},
Teléfono: ${this.telefono},
Edad: ${this.edad}`);
}
}