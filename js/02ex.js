document.cookie="contaVisites=0";
document.cookie="ususario=knna";
console.log(document.cookie); 


// per a lleigir cookies
let arrayCookie=document.cookie.split("; ");

for(let cookie of arrayCookie){
  let [nombre,valor]=cookie.split("="); 
  console.log(`La cookie "${nombre}" tiene el valor "${valor}"`);
  } 
  //fechas
  let hoy=new Date(); 
  let caducidadMs=hoy.getTime() + 1000 * 60 * 60 * 24 * 30;