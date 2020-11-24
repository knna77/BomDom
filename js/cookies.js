
function setCookie(nombre, valor, expiracion){
  var fecha=new Date(); 
  fecha.setTime(fecha.getTime()+ 1000 * 60 * 60 * 24 * expiracion);
  var caduca = "expires="+fecha.toUTCString();
  document.cookie = nombre+"="+valor+";"+caduca+";path=/";
 
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

