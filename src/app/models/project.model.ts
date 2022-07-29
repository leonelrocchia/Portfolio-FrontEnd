export class Project {
    id?: number;
    proyecto: String;
    cliente: String;
    descripcion: String;
    img: String;
    year: number;
    link: String;

    constructor(proyecto: string, cliente: string, descripcion: string, img: string, year: number, link: string){
        this.proyecto = proyecto;
        this.cliente = cliente;
        this.descripcion = descripcion;
        this.img = img;
        this.year = year;
        this.link = link;
    }
}