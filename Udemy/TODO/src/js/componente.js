import { todoList } from "../index";
import { Todo } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const completedButton = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchors = document.querySelectorAll('.filtro');

export const crearTodoHTML = (todo) =>{
    const htmlTodo = `
    <li class="${todo.completado ? 'completed' : ''}" data-id=${todo.id}>
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completado ? 'checked': ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;
        
        const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);
    return div;
} 

txtInput.addEventListener('keyup', (event) =>{
    if(event.key ==='Enter' && txtInput.value.length > 0){
        console.log(event);
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHTML(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event)=>{
    const todoInput = event.target.localName;//obtiene el nombre del elemento al que se le hizo click, input, label, button
    const todoElementLi = event.target.parentElement.parentElement;//Se puede encadenar el parentElement para ir brincando entre elementos contenedores
    const todoId = todoElementLi.getAttribute('data-id');//getAttribute consigue el valor del atributo 

    if(todoInput == 'input'){
        todoList.marcarCompletado(todoId);
        todoElementLi.classList.toggle('completed');//toggle agrega clases si no existen y las quita si existen
    }

    if(todoInput == 'button'){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElementLi);//Elimina un elemento html
    }
});

completedButton.addEventListener('click', (event) => {
    todoList.eliminarCompletados();
    for (let i = divTodoList.children.length - 1;  i >= 0; i--) {
           const li = divTodoList.children[i];
           if(li.classList.contains('completed')){
                divTodoList.removeChild(li);
           }
    }
});

ulFilters.addEventListener('click', (event) => {

    anchors.forEach(anchor => anchor.classList.remove('selected'));

    const filtro = event.target.text;
    if(!filtro) return;

    for (const element of divTodoList.children) {
        element.classList.remove('hidden');
        const completado = element.classList.contains('completed');
        
        if(filtro == 'Pendientes' && completado){
            element.classList.add('hidden');
        }

        if(filtro == 'Completados' && !completado){
            element.classList.add('hidden');
        }
        
    }   
});