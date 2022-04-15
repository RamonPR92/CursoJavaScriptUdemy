
//Clases en ECMAScript 6 
class Persona {
    //use strict ya esta implicito en la clase 
    nombre;
    apellido;
    edad;
    //No se necesita instanciar 
    static humano = true;

    static obtenerVersion(){
        return '1.0';
    }

    constructor(nombre, apellido, edad = 0){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //Setters y Getters son propiedades
    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getNombre(){
        return this.nombre;
    }

    saludar(){
        console.log(`Mi nombre es ${this.nombre}, mi apellido es ${this.apellido} y mi edad es ${this.edad}`);
    }

    soyMayorDeEdad(){
        if(this.edad>= 18){
            console.log('Soy mayor de edad');
        }else{
            console.log('Soy menor de edad');
        }
    }
}

const spider = new Persona('Ramon', 'Perez', 29);
spider.saludar();
spider.soyMayorDeEdad();
spider.setNombre = 'Juan';
spider.saludar();
console.log(spider.getNombre);
console.log(Persona.humano);
console.log(Persona.obtenerVersion());