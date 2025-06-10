


export class Cancion {
  public titulo: string;
  public genero: string;
  private _autor: string;

  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
    this._autor = "";
  }

  get autor(){
    return this._autor;
  }

  set autor(nombre: string){
    this._autor = nombre;
  }

  mostrarDatos(){
    console.log(`Título: ${this.titulo}`);
    console.log(`Género: ${this.genero}`);
    console.log(`Autor: ${this._autor}`);
  }
}