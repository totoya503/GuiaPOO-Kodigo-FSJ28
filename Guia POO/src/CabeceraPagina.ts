



type Tipo_Alineacion = 'centrado' | 'derecha' | 'izquierda';

export class CabeceraPagina {
  private titulo: string;
  private color: string;
  private fuente: string;
  private alineacion:Tipo_Alineacion;

  constructor(titulo: string, color: string, fuente: string, alineacion:Tipo_Alineacion) {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
    this.alineacion = alineacion;
  }

  configurarPropiedades(titulo: string, color: string, fuente: string): void {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
  }

  establecerAlineacion(alineacion:Tipo_Alineacion): void {
    this.alineacion = alineacion;
  }

  imprimirPropiedades(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación: ${this.alineacion}`);
  }
} 