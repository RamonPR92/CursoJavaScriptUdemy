
import { heroeIfAwait, heroesCiclo, obtenerHeroeAwait, obtenerHeroesArr } from './js/await';
import {buscarHeroe, buscarHeroeAsync, promesaLenta, promesaMedia, promesaRapida} from './js/promesas';
import './styles.css';//Para importar un archivo determinado

//---ejemplo sin race
promesaLenta.then(console.log);
promesaMedia.then(console.log);
promesaRapida.then(console.log);

//--Ejemplo con race
//Solo ejecuta la promesa mas rapida, las demas son ignoradas, aunque sean exitosas o con error. 
//Si la promesa mas rapida falla, si sera reportada en el catch
Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(console.log)
    .catch(console.error);

// //Uso de promesa asyncrona
buscarHeroeAsync('capi2')
    .then(console.log)
    .catch(console.error);

console.time('await');
obtenerHeroesArr()
    .then((heroes) => {
        console.log(heroes);
        console.timeEnd('await');
    });


console.log('Manejo de errores con await');
obtenerHeroeAwait('capi3').then( heroe => {
    console.log(heroe);
}).catch(console.error);

console.log('for await, if await');
heroesCiclo();

heroeIfAwait('iron');






