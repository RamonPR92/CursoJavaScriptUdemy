let a = 1;
const videoJuegos = ['Hollow Knight', 'Hades', 'Psychonauts', () => cosa =3, {a}, ['X', 'Megaman', 'Zero', 'Dr. Light']];
const array = new Array(10);
// console.log(videoJuegos[5][3]);

//-----------------
let juegos = ['fifa', 'call of duty', 'apex', 'halo'];

//invierte el arrreglo
juegos.reverse();
console.log(juegos);

//muestra la longitud
console.log('size', juegos.length);

//imprime los elementos, el indice y el arreglo
juegos.forEach((value, indice, arr) =>{
    console.log({value, indice, arr});
});

//Agrega un elemento
juegos.push('forza');
console.log(juegos);

//Agrega un elemento al inicio del arreglo
juegos.unshift('Mortal Kombat');
console.log(juegos);

//Saca el ultimo elemento del arreglo
juegos.pop();
console.log(juegos);

//Quita un numero de elementos y se indica desde que indice
let desdeQueIndice = 1, cuantosElementos = 2;
juegos.splice(desdeQueIndice, cuantosElementos);
console.log(juegos);

//Encontrar indice de un elemento
let index = juegos.indexOf('Mortal Kombat');
console.log({index});


