import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesId = [
    'capi',
    'iron',
    'spider'
];

const heroesPromesas = heroesId.map(buscarHeroe);


//Await solo puede estar dentro de una funcion asyncrona
const obtenerHeroesArr = async() =>{
   //forma 2
   return await Promise.all(heroesId.map(buscarHeroe));
   
    //forma 1 
    // const heroesArr = [];
    // for (const id of heroesId) {
    //     //Se insertan todas las promesas 
    //    heroesArr.push(buscarHeroe(id));//Hace que se espere hasta que la promesa sea resuelta
    // }
    // //Con Promise.all resolvemos las promesas de forma paralela
    // //Con el await esperamos a que todas las promesas sean resueltas antes de devolvers
    // return await Promise.all(heroesArr);
};

const obtenerHeroeAwait = async (id) =>{
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        console.error('Cayo en le catch')
       // throw error;
        return {
            nombre: 'Sin nombre',
            poder : 'Sin poder'
        };
    }  
};

const heroesCiclo = async () =>{
    console.time('ciclo');

    //forma 2
    //for await se comporta parecido a Promise.all pero ademas puedes tratar con cada resultado por separado
    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }

    //forma 1
    //const heroes  = await Promise.all(heroesPromesas);
    //los resultados de las promesas son tratados por separado
    //heroes.forEach( heroe => console.log(heroe));
    // console.log(heroes);
    console.timeEnd('ciclo');
};


//Se utiliza if await para esperar el resultado de una promesa dentro de un if, y hasta que no se resuelva la promesa no se hace la comparacion
const heroeIfAwait = async(id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'IronMan'){
        console.log('Es el mejor heroe');
    }else{
        console.log('Es el peor heroe');
    }
};

export{
    obtenerHeroesArr, 
    obtenerHeroeAwait, 
    heroesCiclo,
    heroeIfAwait
}