let personaje = {
    nombre: 'ramon', 
    apellido: 'perez',
    edad: 29,
    coords:{
        lat: 34.678,
        lon: -123.70
    },
    lenguages: ['java', 'javascript', 'sql']
};

console.log(personaje);
//buscar una propiedad
console.log(personaje.nombre);
console.log(personaje['nombre']);
//buscar propiedades de propiedades
console.log(personaje.coords.lat);
//buscar atributos de propiedades
console.log(personaje.lenguages.length);

//Cambiar el valor de una propiedad
personaje.edad = 30;
console.log(personaje);

//borrar una propiedad
delete personaje.edad;
console.log(personaje);

//agrega una propiedad
personaje.consola = 'xbox';
console.log(personaje);

//Mapea las propiedades a una estructura clave valor
const entries = Object.entries(personaje);
console.log(entries);

//bloquea la eliminacion, modificacion y creacion de propiedades en nuestro objeto
//No tiene efecto ante los objetos anidados
Object.freeze(personaje);
personaje.correo = 'ramon@gmail.com';
console.log(personaje);

//obtiene el nombre de las propiedades del objeto
let propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades});

//obtiene los valores del objeto
let valores = Object.values(personaje);
console.log({valores});



