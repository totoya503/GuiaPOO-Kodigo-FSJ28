



export abstract class Persona{
protected nombre: string;
protected apellido: string;
protected direccion: string;
protected telefono: string;
protected edad: number;

constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
}

//Verifica que la edad de la persona esa mayor a 18
verificarEdad(){
    const mensaje = this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    console.log(mensaje);
    }

abstract mostrarDatos(): void;
}
