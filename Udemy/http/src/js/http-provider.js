const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usersUrl = 'https://reqres.in/api/users?page=2';
const imagenUrl = 'https://api.cloudinary.com/v1_1/dmhdlkrrh';

const obtenerChiste = async () => {
    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) return alert('No se pudo realizar la peticion');
        const {icon_url, id, value} = await resp.json();
        return {icon_url, id,  value};

    } catch (error) {

    }
};

const obtenerUsuarios = async() =>{
    const resp = await fetch(usersUrl);
    const {data} = await resp.json();
    return data;
};

const subirImagen = async(archivo) =>{
    const formData = new FormData();
    formData.append('upload_preset', 'wwgjp3hy');
    formData.append('file', archivo);

    try{

        const resp = await fetch(`${imagenUrl}/upload`, {
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    }catch(error){
        throw error;
    }
};


export {
    obtenerChiste, 
    obtenerUsuarios, 
    subirImagen
}