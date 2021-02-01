'use strict';
const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

const titleElement = document.querySelector('.js-title');

titleElement.innerHTML = `Tenemos ${tasks.length} tareas`;

const listElement = document.querySelector('.js-list');
let listElementsHTML = '';
for (const oneTask of tasks){
    listElementsHTML += `<li ${oneTask.completed ? 'class="completedTask' : ''}>`;

    listElementsHTML += `<input type="checkbox" ${oneTask.completed ? 'checked="checked"' : ""} >`;
    listElementsHTML += `${oneTask.name}</li>`;
}
listElement.innerHTML=listElementsHTML;
