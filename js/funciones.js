let id = 3;

function addTarea(pTarea, pPrioridad) {
    const newTarea = {
        idTarea: id,
        titulo: pTarea,
        prioridad: pPrioridad
    }

    let existe = listaTareas.findIndex(tarea => {
        return tarea.titulo == pTarea && tarea.prioridad == pPrioridad;
    })

    if (existe == -1) {
        listaTareas.push(newTarea);
        printTarea(newTarea, sectionTareas);
        id++;
    } else {
        alert('Tarea duplicada')
    }
}
