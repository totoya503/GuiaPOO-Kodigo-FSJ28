


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

//depositar dinero en la cuenta
depositar(deposito:number){
    if (this.cantidad < 5) {
        console.log("El valor a depositar debe ser mayor a $5.00");
    } else {
        this.cantidad += deposito;
        console.log(`Se ha depositado correctamente $${this.cantidad}`);
    }
}

//Metodo para retirar efectivo de la cuenta
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

//Muestra los datos de la cuenta
mostrarDatos(){
    console.log(`Nombre: ${this.nombre},
Tipo de cuenta: ${this.tipoCuenta},
Número de cuenta: ${this.numeroCuenta}`);
}
}