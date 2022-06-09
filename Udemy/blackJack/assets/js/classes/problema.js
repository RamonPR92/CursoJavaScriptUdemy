
//Se pueden crear objetos pero no clases
const fer = {
    nombre: 'Fer',
    edad : 30,
    imprimir(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    }
};

const juan = {
    nombre: 'Juan',
    edad : 29,
    imprimir(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    }
};

fer.imprimir();
juan.imprimir();

//Estandar antes de ECMA 6 para crear clases

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`);
    }
}

//Se usa new para crear una instancia
const maria  =  new Persona('Maria', 40);
maria.imprimir();



