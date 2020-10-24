let id = 3;

function addTarea(pTarea, pPrioridad) {
    const newTarea = {
        idTarea: id,
        titulo: pTarea,
        prioridad: pPrioridad
    }

    let existe = listaTareas.findIndex(tarea => {
        return tarea.titulo == pTarea &&tarea.prioridad == pPrioridad;
    })

    if (existe == -1) {
        listaTareas.push(newTarea);
        printTarea(newTarea, sectionTareas);
        id++;
    } else {
        alert('Tarea duplicada')
    }
}


//filter by priority
function filterTareasPorPrioridad(pListaTareas, pPrioridad) {


  const result = pListaTareas.filter(tarea => tarea.prioridad.toLowerCase() == pPrioridad.toLowerCase());
  return result;
}


  //filterbyword
  function filterTareasPorPalabra(pListaTareas, pPalabraBuscar) {
    const filterList = pListaTareas.filter(tarea => {
        let titulo = tarea.titulo;
        return titulo.toLowerCase().includes(pPalabraBuscar.toLowerCase());
    })
    return filterList;
}

function eliminarElemento(event) {
  
  event.preventDefault();
  let inputToRemove = event.target.parentNode;
  inputToRemove.parentNode.removeChild(inputToRemove);

  let idBorrar = event.target.dataset.id;
  
  let posicion = listaTareas.findIndex(tarea => tarea.id == idBorrar);
 
  listaTareas.splice(posicion, 1);
  
  
}