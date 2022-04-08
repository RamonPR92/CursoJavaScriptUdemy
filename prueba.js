var hola = 'Hola yo soy ramon';
document.write("<h1>Hola soy ramon</h1>");

let usuario  = {nombre: "Ramon", apellido: "Perez", edad: 28};


class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    
    toString(){
        return `La persona con el nombre ${this.nombre} y apellido ${this.apellido} tiene la edad de ${this.edad} anios`;
    }

}

const persona = new Persona("Ramon", "Perez", 27);
console.log(persona.toString());

persona.nombre = "Juan";
console.log(persona.toString());
