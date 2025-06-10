


export class Cuenta {
  private nombre: string;
  private cantidad: number;
  private tipoCuenta: string;
  private numeroCuenta: string;

  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  depositar(deposito:number){
    if (this.cantidad < 5) {
      console.log("El valor a depositar debe ser mayor a $5.00");
    } else {
        this.cantidad += deposito;
        console.log(`Se ha depositado correctamente $${this.cantidad}`);
    }
  }

  retirar(valor: number){
    if (valor < 5) {
      console.log("El valor a retirar debe ser mayor a $5.00");
    } else if (this.cantidad < valor) {
      console.log("No hay suficiente dinero en la cuenta");
    } else {
      this.cantidad -= valor;
      console.log(`Has retirado $${valor}. Saldo restante: $${this.cantidad}`);
    }
  }

  mostrarDatos(){
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
    console.log(`Número de cuenta: ${this.numeroCuenta}`);
  }
}