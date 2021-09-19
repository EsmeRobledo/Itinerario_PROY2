var date = document.getElementById("day");
var horario = document.getElementById("horario");
var lugar = document.getElementById("Lugar");
var descripcion = document.getElementById("descripcion");
var duracion = document.getElementById("tiempo_estadia");
var editando=false;
var listaItinerario =[];
var itinerario ={};
window.onload = () => {
    const tasklist = JSON.parse( window.localStorage.getItem('itinerario'))
}

function addTask(itinerario_existente){
    if(itinerario_existente != undefined){
        itinerario = itinerario_existente
    }
    else{
        itinerario = {"id":Math.random(),
        "fecha":date.value,
        "horario":horario.value,
        "lugar":lugar.value,
        "descripcion":descripcion.value,
        "duracion":duracion.value}
        listaItinerario.push(itinerario)
        window.localStorage.setItem('itinerario',JSON.stringify(itinerario))
    } 
    let container = document.getElementById("container");
    let row = document.createElement("tr");
    row.id = "itinerario";
    let col_id = document.createElement("td");
    col_id.innerText = itinerario.id;
    col_id.className = "id";
    col_id.id = itinerario.id;
    col_id.style.display = "none";
    row.appendChild(col_id);
    let col_lugar = document.createElement("td");
    col_lugar.innerText = itinerario.lugar;
    row.appendChild(col_lugar);
    let col_desc = document.createElement("td");
    col_desc.innerText = itinerario.descripcion;
    col_desc.className = "descripcion";
    row.appendChild(col_desc);
    let col_horario = document.createElement("td");
    col_horario.innerText = itinerario.horario;
    row.appendChild(col_horario);
    let col_estadia = document.createElement("td");
    col_estadia.innerText = itinerario.duracion;
    row.appendChild(col_estadia);
    let col_fecha = document.createElement("td");
    col_fecha.innerText = itinerario.fecha;
    row.appendChild(col_fecha);
    let col_btn = document.createElement("td");
    col_btn.innerHTML = "<button class='actionBtn' value='Eliminar' onclick='removeTask("+itinerario.id+")'>Eliminar</button> <button class='actionBtn' onclick='editTask("+itinerario.id+")' >Editar</button>"
    row.appendChild(col_btn);
    container.appendChild(row);
    document.getElementById("day").value = ""
    document.getElementById("horario").value = ""
    document.getElementById("Lugar").value = ""
    document.getElementById("descripcion").value = ""
    document.getElementById("tiempo_estadia").value = ""
}

function editTask(itinerarioid){
    const editItinerario = listaItinerario.filter((itinerario) => {
        return itinerario.id == itinerarioid 
    })
   document.getElementById("day").value = editItinerario[0].fecha
   document.getElementById("horario").value = editItinerario[0].horario
   document.getElementById("Lugar").value = editItinerario[0].lugar
   document.getElementById("descripcion").value = editItinerario[0].descripcion
   document.getElementById("tiempo_estadia").value = editItinerario[0].duracion
   let container = document.getElementById("container");
   const list = listaItinerario.length;
   let elementos = document.getElementById(itinerarioid).parentElement;
   container.removeChild(elementos);
   window.localStorage.setItem('itinerario',JSON.stringify(itinerario))
}

function removeTask(itinerarioid){
     const removeItinerario = listaItinerario.filter((itinerario) => {
        return itinerario.id != itinerarioid 
    })
    itinerario=removeItinerario;
    let container = document.getElementById("container");
    const list = listaItinerario.length;
    let elementos = document.getElementById(itinerarioid).parentElement;
    container.removeChild(elementos);
    window.localStorage.setItem('itinerario',JSON.stringify(itinerario))
}