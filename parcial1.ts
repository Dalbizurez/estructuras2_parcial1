import { Hashtable } from "./hashtable";

/* Clase HashProducto
     Hereda de la clase Hashtable, permitiendo cambiar la 
     implementacion del metodo toString y poder acceder a
     los metodos de la clase Producto*/
class HashProducto extends Hashtable<Producto>{

    toString(): string {
        let txt:string = "";
        for (let i = 0; i<this.data.length; i++){
            txt += i+ ":";
            let node = this.data[i];
            while (node){
                txt += " " + node.getData().toString() + "\n";
                node = node.getNext();
            }
            txt += "\n";
        }
        return txt;
    }
}
/**
 * Clase Producto
 * Clase que representa productos de una farmacia
 */
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
        return "\n\tCodigo: 00" + this.codigo +"\n\tNombre: " + this.nombre + "\n\tPrecio Costo: " + this.costo + "\n\tPrecio Venta: " + this.venta
    }

    valueOf(){
        return this.codigo;
    }
}

let hash:HashProducto = new HashProducto(10);
let p1 = new Producto("P001", "Pepto-Bismol", 50, 65);
let p2 = new Producto("P002", "Acetaminofen", 50, 65);
let p3 = new Producto("P003", "Vitaflenaco", 50, 65);
let p4 = new Producto("P004", "Vick's", 50, 65);
let p5 = new Producto("P005", "Advil", 50, 65);
let p15 = new Producto("P015", "Advil", 50, 65);
hash.insert(p1);
hash.insert(p2);
hash.insert(p3);
hash.insert(p4);
hash.insert(p5);
hash.insert(p15);

console.log(hash.search("P001"))
console.log(hash.search("P0016"))
console.log(hash.toString());