
//-------------Funcionamiento normal --------------------
let a = 4;

if(a == 5){
    console.log(`Entro al if`);
}else{
    console.log(`Entro al else`);
    
}

console.log('fin del programa');

//-----------------------------------
// asignacion(=), comparacion de valor (==), comparacion de valor y tipo(===)
const hoy = new Date();
let day = hoy.getDay();

if(day === 0){
    console.log('Hoy es domingo');
}else if(day === 6){
    console.log('Hoy es sabado');   
}
//----------------------
const dias ={
    0:'domingo',
    1:'lunes',
    2:'martes',
    3: 'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
}

console.log(dias[day] || 'El dia no existe');
