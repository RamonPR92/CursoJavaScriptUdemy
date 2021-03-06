
export class Todo{

    /*
    Toma un objeto lo des estructura y lo genera uno nuevo con esos datos
    */
    static fromJSON({id, tarea, completado, creado}){
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;
        return tempTodo;
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimir(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}