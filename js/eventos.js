//DOM selection

let selectTarea= document.querySelector('#introTarea');
let selectPrioridad= document.querySelector('#introPrioridad');
let btnGuardar= document.querySelector ('#btn-save');
let sectionTareas=document.querySelector('#tareas');
let selectBuscarPorPrioridad = document.querySelector('#filtroprioridad');
let buscador = document.querySelector('#buscador');

//Event listeners

btnGuardar.addEventListener('click', recogerDatos);
buscador.addEventListener('input', recogerBusqueda);

//function print any list

function printTareas(pListaTareas, pSection) {
        
        pSection.innerHTML ="";
        pListaTareas.forEach(tarea => {
            printTarea(tarea, pSection);
        })
   
}

function printTarea(pTarea,pSection){

    let article = document.createElement('article');
    article.classList.add('everytask')
    let h3 = document.createElement('h3');
    h3.classList.add(`${pTarea.prioridad}`);

    let contenidoh3=  document.createTextNode(`${pTarea.titulo}`);
    h3.appendChild(contenidoh3);

    //deleteinput
    let input = document.createElement('input');
    input.classList.add('delete');
    input.addEventListener('click', eliminarElemento);
    input.type = "submit";
    input.value = "Eliminar";
    input.dataset.idTarea=id;

    article.appendChild(h3);
    article.appendChild(input);
    pSection.appendChild(article);
}

   
    


printTareas(listaTareas,sectionTareas);
function recogerDatos (event){

    event.preventDefault();
    let inputTarea = selectTarea.value.trim();
    let inputPrioridad = selectPrioridad.value.trim();

    if (inputTarea != "" && inputPrioridad != "") {
        addTarea(inputTarea, inputPrioridad);

    } else {
        alert('Debes rellenar todos los campos!');
    }

    selectTarea.value = "";
    selectPrioridad.value = "";
}
//event filter by priority

selectBuscarPorPrioridad.addEventListener('change', event => {
    printTareas(filterTareasPorPrioridad(listaTareas, event.target.value), sectionTareas);
  })


//filterbyword

function recogerBusqueda(event) {
 
    let palabraBuscar = event.target.value.trim();
    let listaFiltrada = filterTareasPorPalabra(listaTareas, palabraBuscar);
    printTareas(listaFiltrada, sectionTareas);

}