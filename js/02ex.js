


console.log("entrada");
verCookies();

//document.cookie = "nombrecookie=valorcookie; max-age=3600; path=/";







 function setCookie(nombre, valor, expiracion){
 var fecha=new Date(); 
 fecha.setTime(fecha.getTime()+ 1000 * 60 * 60 * 24 * expiracion);
 var caduca = "expires="+fecha.toUTCString();
 document.cookie = nombre+"="+valor+";"+caduca+";path=/;SameSite=Strict";

 }
 function getCookie(nombre) {
  var name = nombre + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
 function deleteCookie(nombre){
  setCookie(nombre,"",0);
 }
 function verCookies(){
 console.log("cookies actuales:\n"+document.cookie);
 }
var visites="visites";
 count= getCookie(visites);

if(isNaN(count)){
//l'últim pàrametre son eld dies que tarda en caducar
y=setCookie("visites",0,1);

count=0;

}

count++;

//document.write("El número de visites és "+count);

y=setCookie("visites",count,1);
if (count>=10){
  deleteCookie("visites");
}
console.log("sortida");
verCookies();
