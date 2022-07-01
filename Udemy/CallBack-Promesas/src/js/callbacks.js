//No se recomienda hacer llamadas anidadas de callbacks

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

export const buscarHeroe = (id, callback) =>{
    const heroe = heroes[id];
    if(heroe){
        callback(null, heroe);//Se envia el error en null
    }else{
        callback(`No existe el heroe con el id ${id}`);//Se envia el error como primer y unico parametro
    }
};