import { Hashtable } from "./hashtable";

class Producto{
    private codigo:number;
    private nombre:string;
    private costo:number;
    private venta:number;

    constructor(codigo:string, nombre:string, costo:number, venta:number){
        this.codigo = parseInt(codigo.slice(1));
        this.nombre = nombre;
        this.costo = costo;
        this.venta = venta;
    }

    public getCodigo():string{
        return "P"+this.codigo;
    }

    public setNombre(nombre:string){
        this.nombre = nombre;
    }
    public getNombre():string{
        return this.nombre
    }

    public setCosto(costo:number){
        this.costo = costo;
    }
    public getCosto():number{
        return this.costo;
    }

    public setVenta(venta:number){
        this.venta = venta;
    }
    public getVenta():number{
        return this.venta;
    }

    toString(){
        return "Codigo: 00" + this.codigo +"\nNombre: " + this.nombre + "\nPrecio Costo: " + this.costo + "\nPrecio Venta: " + this.venta
    }

    valueOf(){
        return this.codigo;
    }
}

