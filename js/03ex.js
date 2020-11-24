//Creem una array d'animals
const animals=["gos","gat","mosca","mosquit","lleó","tigre","balena","tenca","dofí","granota"];
mostraLlista(animals);
//setTimeout() ens permet retrasar la crida a la funció el temps que indiquem en milisegons
setTimeout(()=>(pregunta()), 3000);
//La funció pregunta fa moltes coses (estan expllicades pas a pas dins):
  function pregunta() {
    //Agafem el div amb id "message" i l'introduim el text
    document.getElementById("message").textContent="Vols que la llista isca ordenada alfabèticament?"
    //Creem una variable que guardarà un element botó
    var button = document.createElement("BUTTON");
    //El botó te un identificador "btn"
    button.setAttribute("id","btn");
    //Introduim el text que volem que aparega dins del botó
    button.innerHTML = "si";
    //Fem que aparega el botó en el body
    document.body.appendChild(button);
    /*Aquesta funció s'iniciarà quan polsem el botó, si no està creat el botó no es pot cridar
    així ens assegurem que tot anirà amb ordre
    */
    button.onclick = function(){
    var borra;
    //Borrem la llista anterior
     borra = document.getElementById("proList");
     borra.remove(); 
     //Ordenem el array alfabèticament 
     animals.sort();
     //Ho tornem a mostrar ordenat
     mostraLlista(animals);
     //Açò no ho demanava el exercici però ho he cregut convinient
     //-----------------------------------------------------------
     //Ací esborre la pregunta i el botó, crec que no tindria sentit 
     //una pregunta que ja s´ha contestat i un botó que no fa res 
      borra = document.getElementById("message");
      borra.remove(); 
      borra = document.getElementById("btn");
      borra.remove(); 
    };
  }
  //Aquesta funció ens permet mostrar un array en format llista
  function mostraLlista(array){
    //creem una etiqueta ul 
    var ul = document.createElement('ul');
    //amb id proList
    ul.setAttribute('id','proList');
    //i la introduim en un div que tenim all html amb id (an)
    document.getElementById('an').appendChild(ul);
    //recorrem el array passat per paràmetre apllicant-li la funció 
    array.forEach(elementsLlista);
    //el paràmete element fa referència als elements del array
    function elementsLlista(element) {
      //creem la etiqueta li
        var li = document.createElement('li');
       //amb classe item (si no ferem este pass donaria igual, es uan questió de que htmll quede ben format) 
      li.setAttribute('class','item');
       //Anem introduint etiquetes li dintre de la etiqueta ul
       ul.appendChild(li);
       //introduim els lements del array adintre de le les etiquetes li
       li.innerHTML=li.innerHTML + element;
    }
  }
