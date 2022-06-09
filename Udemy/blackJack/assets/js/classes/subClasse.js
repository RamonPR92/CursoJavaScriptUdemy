
//Clases en ECMAScript 6 
class Persona {
    //use strict ya esta implicito en la clase 
    //con # indicamos que la propiedad es privada
    #nombre;
    apellido;
    edad;
    //No se necesita instanciar 
    static humano = true;

    static obtenerVersion(){
        return '1.0';
    }

    constructor(nombre, apellido, edad = 0){
        this.#nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //Setters y Getters son propiedades
    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getNombre(){
        return this.#nombre;
    }

    saludar(){
        console.log(`Mi nombre es ${this.#nombre}, mi apellido es ${this.apellido} y mi edad es ${this.edad}`);
    }

    soyMayorDeEdad(){
        if(this.edad>= 18){
            console.log('Soy mayor de edad');
        }else{
            console.log('Soy menor de edad');
        }
    }
}

//Se utiliza extends como en Java
class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, apellido, edad, clan){
        //se utiliza super para poder llamar al constructor padre
        super(nombre, apellido, edad);
        this.clan = clan;
    }
}

const spider = new Heroe('Ramon', 'Perez', 29, 'Avengers');
spider.saludar();
console.log(spider);
console.log(spider.getNombre);