
let dia = new Date().getDay();
let horaActual = new Date().getHours();
let horaApertura;
let mensaje;

//------------------
//if(dia === 0 || dia === 6){
//------------------------
// if([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Entre semana');
//     horaApertura = 11;
// }
//----------------
horaApertura = ([0,6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' :  `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// if( horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

console.log(mensaje);

console.log('---------------------------');
let nota = 90;
let calificacion =  nota >= 90 ? 'A+' :
                    nota >= 85 ? 'A'  :
                    nota >= 80 ? 'B+' :
                    nota >= 75 ? 'B'  :
                    nota >= 70 ? 'C+' : 'F';

console.log(nota, calificacion);
