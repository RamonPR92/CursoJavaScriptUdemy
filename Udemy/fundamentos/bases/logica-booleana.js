
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}


const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && false);


console.log('----------------------');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse() );

console.log('----------------------');
console.log(regresaTrue() || regresaFalse() );

console.log('-------------- Asignaciones;----------------');

let souUndefined = undefined;
let soyNull = null;
let soyFalso = false;

//Se asigna el ultimo valor a la variable si las variables son verdaderas o no son null ni undefined
let a1 = 'Hola' && true && 'Hola Mundo';
console.log(a1); //'Hola Mundo'

let a2 = null || false || 'Hola Mundo';
console.log(a1); //'Hola Mundo'
