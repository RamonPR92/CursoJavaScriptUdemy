
// function crearPersona(nombre, apellido){
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }
//---------------------
// function crearPersona(nombre, apellido){
//     return {
//         nombre,
//         apellido
//     }
// }
//-------------------------------
 const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Ramon', 'Perez');
console.log(persona);

//--------------------------------------------

//arguments solo es para funciones tradicionales no para funciones de flecha
function imprimeArgumentos(){
    console.log(arguments);
};

imprimeArgumentos(10, true, false, 'Fernando','Hola');
//--------------------------
//funciona como en java, args siempre va al ultimo
const printArguments = (edad, ...args) => {
    //console.log(edad, args);
    return args;
};

//extrae los valores del arreglo y los asigna a unas variables segun el orden
const [numero, verdadero, falso, nombre, saludo] = printArguments(29, 10, true, false, 'Fernando','Hola');
console.log({numero, verdadero, falso, nombre, saludo});

//extrae una propiedad que ya tiene nombre y le asigna otro
const {apellido: apellidoExtraido} = crearPersona('Ramon', ' Perez');
console.log({apellidoExtraido});

//-----------------------------------------------
//Des estructuracion
let personaje = {
    nombre: 'ramon', 
    apellido: 'perez',
    edad: 29,
    coords:{
        lat: 34.678,
        lon: -123.70
    },
    lenguages: ['java', 'javascript', 'sql'],
};

// const imprimePropiedades  = (personajeVariable) =>{
//     console.log(personajeVariable.nombre);
//     console.log(personajeVariable.apellido);
//     console.log(personajeVariable.edad);
//     console.log(personajeVariable.coords);
//     console.log(personajeVariable.lenguages);
// };
 //propiedadNoexiste = 13 es una forma de dar un valor por default cuando el objeto no cuenta con la propiedad                                                                   
const imprimePropiedades  = ({nombre, apellido, edad, coords, lenguages, propiedadNoexiste = 13}) =>{
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(coords);
    console.log(lenguages);
    console.log(propiedadNoexiste);
};

imprimePropiedades(personaje);

