


export class Cancion {
public titulo: string;
public genero: string;
private _autor: string;

constructor(titulo: string, genero: string) {
this.titulo = titulo;
this.genero = genero;
this._autor = "";
}

//se retorna el autor
get autor(){
    return this._autor;
}

//se asigna el autor
set autor(nombre: string){
    this._autor = nombre;
}

//Muestra los datos de la cancion
mostrarDatos(){
    console.log(`Título: ${this.titulo},
Género: ${this.genero},
Autor: ${this._autor}`);
}
}