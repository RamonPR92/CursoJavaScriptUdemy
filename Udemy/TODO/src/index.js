import {Todo, TodoList}  from './classes'; //Cuando se especifica solo la carpeta se buscara el index.js y se importara todo lo que tenga como export
import { crearTodoHTML } from './js/componente';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => {
    crearTodoHTML(todo);
});
