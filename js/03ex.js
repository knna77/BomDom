//Creem una array d'animals
const animals=["gos","gat","mosca","mosquit","lleó","tigre","balena","tenca","dofí","granota"];
//mostrem els animals dins d'un div untilitzant el mètode join()
document.getElementById("an").textContent=animals.join(", ");
//setTimeout() ens permet retrasar la crida a la funció el temps que indiquem en milisegons
setTimeout(()=>(pregunta()), 3000);
//La funció pregunta fa moltes coses:
  function pregunta() {
    //agafem el div amb id "message i l'introduim el text"
    document.getElementById("message").textContent="Vols que la llista isca ordenada alfabèticament?"
    //Creem una variable que guardarà un element botó
    var button = document.createElement("BUTTON");
    //El botó te un identificador "btn"
    button.setAttribute("id","btn");
    //Introduim el text que volem que aparega dins del botó
    button.innerHTML = "si";
    //Fem que aparega el botó en el body
    document.body.appendChild(button);
    //Aquesta funció s'iniciarà quan polsem el botó
    button.onclick = function(){
     //Ordenem el array alfabèticament 
      animals.sort();
     //mostrem els animals dins d'un div untilitzant el mètode join() i matxaquem el text que  hi havia abans 
      document.getElementById("an").textContent=animals.join(", ");
     //Açò no ho demanava el exercici però ho he cregut convinient
     //-----------------------------------------------------------
     //Ací esborre la pregunta i el botó, crec que no tindria ssentit una pregunta que ja s´ha contestat i un botó que no fa res 
      var borra = document.getElementById("message");
      borra.remove(); 
      borra = document.getElementById("btn");
      borra.remove(); 
    };
  }

