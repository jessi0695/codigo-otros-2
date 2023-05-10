//Se cambian comillas dobles por comillas simples y se edita el nombre de form
var formulario = document.querySelector('.formulario');
//Se cambia # por punto para queryselector 

//Se acomoda la función formulario.onsubmit 
formulario.onsubmit = function(event) {
  //Se añade un evento para la funcion
  event.preventDefault();
  //Se cambian los nombres de las variables
  var nombre = formulario.elements[0];
  var edad = formulario.elements[1];
  var nacionalidad = formulario.elements[2];
  //Se cambian los nombres de los values
  var nombre = nombre.value;
  var edad = edad.value;
  //Se cambian nombres
  var i = nacionalidad.selectedIndex;
  var nacionalidad = nacionalidad.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);
  //Se agrega el formulario.elements de cada variable donde corresponde
  if (nombre.length === 0) {
    formulario.elements[0].classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    formulario.elements[1].classList.add("error");
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}
//Se añaden punto y coma necesarios
var botonBorrar = document.createElement("button");
botonBorrar.textContent = ("Eliminar invitado");
botonBorrar.id = ("boton-borrar");
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  //Se añade un querySelector y puntos y coma necesarios
var lista = document.querySelector(".lista-de-invitados");
var elementoLista = document.createElement("div");
// Se edita el added por metodo add
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

//Se comentan estas lineas de codigo porque se repiten
// var spanNombre = document.createElement("span");
// var inputNombre = document.createElement("input");
// var espacio = document.createElement("br");
// spanNombre.textContent = ("Nombre: ");
// inputNombre.value = nombre ;
// elementoLista.appendChild(spanNombre);
// elementoLista.appendChild(inputNombre);
// elementoLista.appendChild(espacio);

//Se añaden punto y coma necesarios
function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}
//Se añaden punto y coma necesarios
crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

//Se añaden parentesis y puntos y coma necesarios
var botonBorrar = document.createElement("button");
botonBorrar.textContent = ("Eliminar invitado");
botonBorrar.id = ("boton-borrar");
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
 this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}
