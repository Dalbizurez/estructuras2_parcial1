/*
Clase Linked_Node
    Nodos enlazados para el manejo de colisiones en la tabla
    Hash
 */
class Linked_Node<T> {
    private data: T;
    private next!:Linked_Node<T>;

    constructor(data:T){
        this.data = data;
    }

    public setNext(next:Linked_Node<T>){
        this.next = next
    }
    public getNext(){
        return this.next;
    }

    public getData():T{
        return this.data;
    }

    toString(){
        return this.data;
    }

}

/*
Clase Hashtable
    Implementacion de una tabla hash, que utiliza una lista
    enlazada para el manejo de colisiones
*/
export class Hashtable<T> {
    private size: number;
    protected data: Linked_Node<T>[];

    constructor(size: number) {
        this.data =  new Array(size);
        this.size = size;
    }

    private hash(data: any): number {
        return data % this.size;
    }

    public insert(data:T): void {
        let index:number = this.hash(data);
        if (!this.data[index]){
            this.data[index] = new Linked_Node(data);
        } else {
            let node:Linked_Node<T> = this.data[index];
            while (node.getNext()){
                node = node.getNext();
            }
            node.setNext(new Linked_Node(data));
        }
    }

    public search(data: number|string): T|string{
        let index: number = this.hash(data);
        let node = this.data[index];
        if (typeof(data) == "string"){
            data = parseInt(data.slice(1))
        }
        while (node){
            if (node.getData() == data){
                return node.getData()
            }
        }
        return "No registrado"
    }

    toString() {
        let txt:string = "";
        for (let i = 0; i<this.data.length; i++){
            txt += i+ ":";
            let node = this.data[i];
            while (node){
                txt += " " + node.getData() + ",";
                node = node.getNext();
            }
            txt += "\n";
        }
        return txt;
    }
}