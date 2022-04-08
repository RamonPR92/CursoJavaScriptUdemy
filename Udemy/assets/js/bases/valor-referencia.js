
//los tipos primitivos trabajan a nivel de valor
let a = 10;
let b = a;
a = 30;

console.log(a, b);

//Los objetos trabajan a nivel de referencia
//Si algun valor de objeto es modificado, afectara a todas las variables que apunten a esa referencia
let juan = {nombre: 'Juan'};
let ramon = juan;
ramon.nombre = 'Ramon';

console.log({juan, ramon});
//--------------------------

//Para copiar un objeto en otra referencia se usa {...referenciaOrigen}
let maria = {nombre: 'Maria'};
let juana = {...maria};
juana.nombre = 'Juana';

console.log({maria, juana});

//----------------
//Metodo que retorna una nueva persona basado en otra
//Pasa como parametro la persona origen para indicar que vamos a hacer una copia se usa {...referenciaOrigen}
const cambiarNombre = ({...persona}) =>{
    persona.nombre = 'PersonaX';
    return persona;
};

let beto = {nombre: 'Beto'};
let david = cambiarNombre(beto);
console.log({beto, david});

//------------------------------------
//Copiar arreglos a nueva referencia
//Se utiliza [...ArregloOrigen] para hacer una copia de datos a una nueva referencia
const frutas = ['manzana', 'fresas', 'platanos'];
const nuevaFruta = [...frutas];
//const nuevaFruta = frutas.slice(); //otra manera de copiar datos

nuevaFruta.push('pera');

console.log({frutas, nuevaFruta});
