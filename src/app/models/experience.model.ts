export class Experience {
    id?: number;
    puesto: String;
    empleador: String;
    descripcion: String;
    img: String;
    inicio: number;
    fin: number;

    constructor(puesto: string, empleador: string, descripcion: string, img: string, inicio: number, fin: number){
        this.puesto = puesto;
        this.empleador = empleador;
        this.descripcion = descripcion;
        this.img = img;
        this.inicio = inicio;
        this.fin = fin;
    }
}