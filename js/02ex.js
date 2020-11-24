


//El mensatge d' entrada es per poder comparar per consola l'entrada i la sortida
console.log("visites abans");
//Aquesta funció ens permet vore les cookies que existeixen
verCookies();
/*setCookie ens permet crear  una cookie amb un nom (nombre) que conté un valor (valor) i una data (expiracion) d'expiració 
 que seran els dies que volem que tarde en caducar la cookie
*/
 function setCookie(nombre, valor, expiracion){
  //Guardem la data de hui en la variable fecha
 var fecha=new Date(); 
 //matxaquem el resultat de fecha sumant-li els dies que venen indicats en expiracion
 //multipliquem per 1000 per a pasar els milisegons a segons, 
 //multipliquem per 60 per a pasar segons a minuts
 //multipliquem per 60 (altra vegada) per a pasar minuts a hores
 //multipliquem per 24 per a pasar hores a dies
 fecha.setTime(fecha.getTime()+ 1000 * 60 * 60 * 24 * expiracion);
 //El mètode toUTCString() converteix la data de la zona horaria on estem en una cadena de text
 //(aquest format és el que enten una cookie)
 var caduca = "expires="+fecha.toUTCString();
 //Construim la cookie amb un nom que te un valor i una data d'expiració 
 //path=/ indica el directori desde on podem accedir utilitzant aquesta cookie
 //Gràcies al atribut SameSite el navegador pot controlar el risc de fuga d'infomació
 //Strict és per a que sols es puga accedir a la cookie desde el domini original
 document.cookie = nombre+"="+valor+";"+caduca+";path=/;SameSite=Strict";
 }
 //getCookie() ens permet vore tota la informació d'una cookie passant-li el nom d'aquesta per paràmetre
 function getCookie(nombre) {
//Guardem el nom de la cookie que busquem en la variable name i afegim un = 
  var name = nombre + "=";

  var decodedCookie = decodeURIComponent(document.cookie);
  //creem una array amb el valor de totes les cookies que tenim
  var array = decodedCookie.split(';');
  // recorrem el array
  for(var i = 0; i <array.length; i++) {
  // anem guardan en c els elements del array 
    var c = array[i];
  //mentre el primer caràcter de c no estiga buit...
    while (c.charAt(0) == ' ') {
  //sobreescribim la cadena a partir del segon caracter  
      c = c.substring(1);
    }
  /*Comprovem si la subcadena que tenim en la primera possició es troba el que tenim
   guardat en name utilitzant indexOf. Dit d'altra manera Comprovem si la variablle 
   que hem passat com a parametre i el "igual" que hem afegit es troba...
  */
    if (c.indexOf(name) == 0) {
  /*si es troba, retornem el valor que conté, que es troba desde name.length(després del igual)
  hasta la part que falta del valor
  */
      return c.substring(name.length, c.length);
    }
  }
  // si notrobarem la cookie amb el non que hem passat retornem un string buit
  return "";
}
//Borrem la cookie fent que caduque ara
 function deleteCookie(nombre){
  setCookie(nombre,"",0);
 }
 //Aquesta funció l'utilitze per a vore que tot funcione com cal
 //Mostra totes les cookies
 function verCookies(){
 console.log("cookies actuales:\n"+document.cookie);
 }
 //----------------------------------------------------------------
 //Creem la variable visites que conté el text "visites" 
var visites="visites";
//count es un contador que agafa el valor de visites
count= getCookie(visites);
//comprovem si el valor és un número, dit dáltra manera ens assegurem que la cookie ha sigut creada
if(isNaN(count)){
//l'últim pàrametre son els dies que tarda en caducar
//si no existira la cookie la creem  (30 dies com indica el exercici)
y=setCookie("visites",1,30);
//posem el contador a cero
count=getCookie("visites");
}
//summen la visita i ho reflexem al contador
count++;

//li introduim a la cookie el número de visites matxacant la cookie anterior 
//i li tornem a posar data d'expiració 30 dies a partir d'ara:
y=setCookie("visites",count,30);
//Mostrem el número de visites per pantalla
document.write("El número de visites és "+getCookie("visites"));
//Comprovem si el número de visites és superior a 10
if (getCookie("visites")>=10){
//Si el númeroo de visites és superior a 10, borrem la cookie
  deleteCookie("visites");
}

//El mensatge de sortida es per a poder comparar per consola l'entrada i la sortida
console.log("visites després");
verCookies();
