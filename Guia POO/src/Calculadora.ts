
//no se que comentarles

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
    //se valida que el numero enviado no sea 0
    if (b === 0) {
        console.log("No se puede dividir entre cero.");
    }else{
        return a / b;
    }

}

potencia(base: number, exponente: number){
    return Math.pow(base, exponente);
}

//Calcular factorial
factorial(n: number): number {
    //se valida que no sea un numero negativo
    //en valores negativos va a arrojar 0 pero ya asi que quede, es mejor que un bucle infinito
    if (n < 0){
        console.log("No se puede calcular el factorial de un número negativo.");
        return 0;
    }
    //!0=1
    if (n === 0){
        return 1;
    }
        return n * this.factorial(n - 1);
    }
}