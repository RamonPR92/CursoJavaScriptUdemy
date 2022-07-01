
import { buscarHeroe as buscarHeroeCallback} from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';//Para importar un archivo determinado

const heroeId = 'capi';
const heroeIdTwo = 'iron';

//Toma un arreglo de metodos que retornen una Promesa y devuelve un arreglo de respuestas 
Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeIdTwo)])
    .then(([heroe1, heroe2]) => {//des estrucutracion de un arreglo
        console.log(`${heroe1.nombre} y el ${heroe2.nombre}`);
}).catch(err => {
    console.log(err);
}).finally( () =>{
    console.log('Las promesas fueron procesadas');
});

//Ejemplo de Promise Hell
// buscarHeroe(heroeId)
// .then( (heroe1) => {
//     // console.log(`Heroe encontrado  ${heroe.nombre}`);
//     buscarHeroe(heroeIdTwo)
//     .then((heroe2) => {
//         console.log(`${heroe1.nombre} y ${heroe2.nombre}`);
//     });
// });



//Ejemplo de callback hell
// buscarHeroe(heroeId, (error, heroe1) => {
//     if(error){
//        return console.error(error);
//     }

//     buscarHeroe(heroeIdTwo, (error, heroe2) =>{
//         if(error){
//             return console.error(error);
//         }
//         console.log(`Heroe  ${heroe1.nombre} y ${heroe2.nombre}`);
//     });
// });

