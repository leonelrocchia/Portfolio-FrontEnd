export class Education {
    id?: number;
    titulo: String;
    institucion: String;
    descripcion: String;
    img: String;
    inicio: number;
    fin: number;

    constructor(titulo: string, institucion: string, descripcion: string, img: string, inicio: number, fin: number){
        this.titulo = titulo;
        this.institucion = institucion;
        this.descripcion = descripcion;
        this.img = img;
        this.inicio = inicio;
        this.fin = fin;
    }
}
