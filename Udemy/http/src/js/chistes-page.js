import { obtenerChiste } from "./http-provider";


const body = document.body;
let btnOtroChiste;
let listaChistes;


const crearChisteHtml = () => {
    const html =
    `
        <h1 class="mt-5">Chistes</h1>
        <hr>
        <a name="" id="agregarOtroChiste" class="btn btn-primary" href="#" role="button">Agregar chiste</a>
        <ol class="mt-2 list-group" id="lista-chistes">
        </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
};

const eventos = () =>{
    listaChistes = document.querySelector('#lista-chistes');
    btnOtroChiste = document.querySelector('#agregarOtroChiste');

    btnOtroChiste.addEventListener('click', async() =>{
        mostrarChiste( await obtenerChiste());
    });
};

const mostrarChiste = (chiste) =>{
    const liChiste = document.createElement('li');
    liChiste.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
    liChiste.classList.add('list-group-item');
    listaChistes.append(liChiste);
};

export const init = () =>{
    crearChisteHtml();
    eventos();
};

