import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHTML = () =>{
    const html = `
    <h1 class="mt-5">Subir archivos </h1>
    <hr>

    <label for="">Selecciona una fotografia:</label>
    <p></p>
    <input id= "inputFile" type="file" accept="image/png, image/jpeg">

    <br>
    <img id="foto" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('#inputFile');
    imgFoto = document.querySelector('#foto');
};

const eventos = () =>{
    inputFile.addEventListener('change', (event) =>{
        const imagen = event.target.files[0];
        console.log(imagen);
        subirImagen(imagen).then(url => {
            imgFoto.src = url;
        });
    });
};

const init = () =>{
    crearInputFileHTML();
    eventos();
};

export {
    init
}