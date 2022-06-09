

function saluda(){
    console.log('Hola mundo')
}

const saludar = function(){
        console.log('Hola perros');
}

function imprimir(recurso){
    console.log(`Imprimiendo ... ${recurso}`)
}

const hablar = nombre => {
    console.log(`Hablando con ${nombre}`);
};

function correr(){
    console.log('Corrriendo...');
    return 1;
}

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

// saluda();
// saludar();
// imprimir('Hola que hace');
// hablar('Ramon');

// console.log(correr());

console.log(getAleatorio());
console.log(getAleatorio2());