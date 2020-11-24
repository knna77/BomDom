const animals=["gos","gat","mosca","mosquit","lleó","tigre","balena","tenca","dofí","granota"];
//document.write(animals.join("<br>"));
document.getElementById("an").textContent=animals.join(", ");


setTimeout(()=>(pregunta()), 3000);

  function pregunta() {
    document.getElementById("message").textContent="Vols que la llista isca ordenada alfabèticament?"
    var button = document.createElement("BUTTON");
    button.setAttribute("id","btn");
    button.innerHTML = "si";
    document.body.appendChild(button);

    button.onclick = function(){
      animals.sort();
      document.getElementById("an").textContent=animals.join(", ");
      var borra = document.getElementById("message");
      borra.remove(); 
      borra = document.getElementById("btn");
      borra.remove(); 
    };
  }



  //animals.sort();
//document.getElementById("an").textContent=animals.join(", ");

