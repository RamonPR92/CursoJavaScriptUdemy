const heroes = {
    capi : {
        nombre: 'Capitan America',
        poder: 'Pegar fuerte'
    },
    iron : {
        nombre: 'IronMan',
        poder: 'Inteligente'
    },
    spider : {
        nombre: 'SpiderMan',
        poder: 'Lanzar telarania'
    }
};

 const buscarHeroe = (id) =>{
    const heroe = heroes[id];
    
    return new Promise((resolve, reject) =>{
        if(heroe){
            //Espera 1 segundo para resolver cada promesa
            setTimeout(() => resolve(heroe), 1000);
        }else{
            reject(`No existe un heroe con el id ${id}`);
        }
    });
};

//Async automaticamente retorna una promesa, 
//si todo sale bien retornamos la respuesta sin el resolve
//si sale mal, lanzamos el error con throw, sin necesidad del reject
const buscarHeroeAsync = async(id) =>{
    const heroe = heroes[id];

    if(heroe){
        return heroe;
    }else{
        //throw Error(`No existe un heroe con el id ${id}`);
        throw `No existe un heroe con el id ${id}`;
    }
};

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa rapida'), 1000);
});

//Para exportar varios elementos 
export {
    promesaLenta,
    promesaMedia, 
    promesaRapida, 
    buscarHeroe,
    buscarHeroeAsync
}

