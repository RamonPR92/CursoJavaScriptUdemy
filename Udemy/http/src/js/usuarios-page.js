import { obtenerUsuarios } from "./http-provider";

const body = document.body;
let infoTabla;

const crearTablaBase = () => {

    const html =`
            <h1>Usuarios</h1>
            <hr>
            <table class="table" id="tablaUsuarios">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody id="infoTabla">
                </tbody>
            </table>
    `;

    const divTabla = document.createElement('div');
    divTabla.innerHTML = html;
    body.appendChild(divTabla);
    infoTabla = document.querySelector('#infoTabla');
};


const crearFila = (usuario) =>{     
        const trTabla = document.createElement('tr');
        trTabla.innerHTML =`
            <td>${usuario.id}</td>
            <td>${usuario.first_name}</td>
            <td>${usuario.last_name}</td>
            <td>${usuario.email}</td>
            <td><img class= "img-thumbnail" src="${usuario.avatar}"></td>
        `;

        infoTabla.append(trTabla);

};

export const init = async() => {
    //Crea el html base
    crearTablaBase();
    //Obtiene los datos del endpoint
    const usuarios = await obtenerUsuarios();
    //Por cada dato del endpoint crea un elemento para el html
    usuarios.forEach(usuario => {
    crearFila(usuario);
   });
};