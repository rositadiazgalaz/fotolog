function agregaPosteo() {
//escribe aca el codigo

/* rescatamos el contenedor-posteos, el nombre y el comentario 
del usuario*/
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;

// cramos el nodo elemento donde ira nuestro post 
var nuevoPost = document.createElement("div");

// creamos elementos donde guardaremos los valores 
var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");

// creamos elementos para corazon
var parrafCorazon= document.createElement("p");
var i = document.createElement("i");

// asignamos padre a icono de corazon 
parrafCorazon.appendChild(i);

// damos atributos al corazon 
parrafCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");

//ahora se transformara el nombre a nodo de texto 
var nodoNombre= document.createTextNode(nombreFF+ " escribió: ");
var nodoPosteo = document.createTextNode(contenidoFF);

// se asignan padres a los nodos creados
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

// ahora asignamos padres a nombres y contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);

// creamos funcion click para el corazon y le asignamos
// la clase de rojo de css
i.addEventListener("click", function(){
	i.classList.toggle("rojo");
});

// finalmente le damos a tributos a nuestro post y lo
// agregamos a nuestro contenedor .posteos 
nuevoPost.setAttribute("class", "posteo");
containerPosteos.appendChild(nuevoPost);

// para resetear los cambios y dejarlos nuevamente en blanco
document.getElementById("nombre").value ="";
document.getElementById("cajaposteos").value ="";


}
agregaPosteo();