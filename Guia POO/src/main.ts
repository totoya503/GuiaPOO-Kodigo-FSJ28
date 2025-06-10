//si da error aca es que las iniciales de la carpeta estan en minusculas (a mi si me corre asi tal cual pero por si acaso)
import { CabeceraPagina } from './cabeceraPagina';
import { Calculadora } from './calculadora';
import { Cancion } from './cancion';
import { Cuenta } from './cuenta';
import { Empleado } from './Empleado';
import './style.css'

//Ejercicio 1
const cabecera = new CabeceraPagina("Mi Página", "azul", "Arial", "centrado");
cabecera.establecerAlineacion("derecha");
cabecera.imprimirPropiedades();

//Ejercicio 2
const calc = new Calculadora();
console.log("Suma:", calc.sumar(5, 3));
console.log("Factorial de 5:", calc.factorial(5));

//Ejercicio 3
const cancion = new Cancion("Imagine", "Rock");
cancion.autor = "John Lennon";
cancion.mostrarDatos();

//Ejercicio 4
const cuenta = new Cuenta("Pedro", 100, "Ahorro", "123456789");
cuenta.depositar(5);
cuenta.retirar(20);
cuenta.mostrarDatos();

//Ejercicio 5
const empleado = new Empleado("Ana", "Ramírez", "Av. Central 123", "1234-5678", 30, 800);
empleado.mostrarDatos();
empleado.verificarEdad();
empleado.imprimirSueldo();
