function agregarTarea()
        {
            var tarea = document.getElementById("nueva-tarea").value; //elemento al que quiero acceder
            var nuevoItem = document.createElement("li");
            nuevoItem.textContent=tarea;
            document.getElementById("tarea-lista").appendChild(nuevoItem);
            document.getElementById("nueva-tarea").value="";
        };