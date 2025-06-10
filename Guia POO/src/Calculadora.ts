


export class Calculadora {
  sumar(a: number, b: number){
    return a + b;
  }

  restar(a: number, b: number) {
    return a - b;
  }

  multiplicar(a: number, b: number) {
    return a * b;
  }

  dividir(a: number, b: number){
    if (b === 0) {
        console.log("No se puede dividir entre cero.");
    }else{
        return a / b;
    }
    
  }

  potencia(base: number, exponente: number){
    return Math.pow(base, exponente);
  }

  factorial(n: number): number {
    if (n < 0){
        console.log("No se puede calcular el factorial de un número negativo.");
    }
    if (n === 0) return 1;
    return n * this.factorial(n - 1);
  }
}