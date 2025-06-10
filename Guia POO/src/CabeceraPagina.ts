



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

//Configurar propiedades
configurarPropiedades(titulo: string, color: string, fuente: string): void {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
}

//Establece la alineacion que se le manda
establecerAlineacion(alineacion:Tipo_Alineacion){
    this.alineacion = alineacion;
}

imprimirPropiedades(){
    console.log(`Título: ${this.titulo},
Color: ${this.color},
Fuente: ${this.fuente},
Alineación: ${this.alineacion}`);
}
} 