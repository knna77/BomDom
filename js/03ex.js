
 //creem el constructor d'ordinador

  /*-ram, un número que indica els GB de capacitat d memòria ram
    -cap Capacitat de disc dur, un número que indica el GB de capacitat
    -polz Polzades de pantalla, un número que indica Polzades
    -marca, un text
    -model, un text
 */
 function Ordinador(ram,cap,polz,marca,model) {
    
   //ens asegurem que les variables siguen un número i no estiguen buides
   //en cas contrari li donem valor per defecte
    if (ram==null||isNaN(ram)){
      ram=4;
    }
    if (polz==null||isNaN(ram)){
      polz=17;
    }
    if(cap==null||isNaN(ram)){
      cap=512;
    }
    //assignem valors al objecte ordinador
    this.ram=ram;
    this.polz=polz;
    this.cap=cap;
    //marca es un camp que s´ha d'empllenar obligatòriament, per tant cridem a la funció 
    //finestraRequerit (després està explicada). I li donem valor a la marca de l'ordinador i al model

     marca=finestraRequerit(marca,"marca");  
     this.marca=marca;
  
     model=finestraRequerit(model,"model");  
     this.model=model;  
}
//Ordinador.prototype ens permetrà escriure i soobreescriure mètodes d' Ordinador
Ordinador.prototype={
//Sobreescrivim el mètode toString()
toString(){
//La variable detalls emmagazemarà el string final que voldrem mostrar
var detalls;
//Si l'autonomia no ha sigut definida, significa que és un ordinador no un portàtil.
//D'aquesta manera posarem un tìtol que corrsponga
if(this.autonomia==undefined){
detalls="<h1>Detalls de l'ordinador</h1>";
}else {detalls="<h1>Detalls del portàtil</h1>"}
detalls+="<h2>Marca: "+this.marca+"</h2>";
detalls+="<h2>Model: "+this.model+"</h2>";
detalls+="<h2>Memòria Ram: "+this.ram+" GB</h2>";
detalls+="<h2>Capacitat del Disc Dur:"+this.cap+" GB</h2>";
detalls+="<h2>Polzades:"+this.polz+ "polzades</h2>";
//Si és un portàtil afegirem autonomia al string detalls
if(this.autonomia!=undefined){
  detalls+="<h2>Autonomia:"+this.autonomia+ "Hores</h2>";
}
//retornem el string final
return detalls;
},
//sobreescrivim Ordinador i donem la possibilitat de passar altre paràmetre que és autonomia
portatil(autonomia){
  //Donem valor per defecte a ram,cap, polz.. 
this.ram=4;
this.cap=256;
this.polz=12;
//Si rebem autonomia li assignem el valor rebut, en cas contrari valldrà 4
if(autonomia==undefined||autonomia==null||autonomia==""){
  this.autonomia=4;}else {this.autonomia=autonomia;}


}
}
//Aquesta funció rep una variable i un string
function finestraRequerit(camp,text){
  //comprovem si la variable, és undefined, null o és un string buit
  while (camp==undefined||camp==null||camp==""){
    //afegim l'informació corresponent al usuari a través d'un prompt
    //arrepleguem el valor posat
    camp = prompt("El camp "+text+" és requrit");
    //quan l'usuari omli el camp assignem el valor a la variable i exixim del bucle
  }
  //retornem la variable
  return camp;
  }
//TEST
//------------------------------------------------------------------------
//Creem un ordinador buit
document.write("0--------------------------------------------------------------");
var ord1=new Ordinador();
//mostrem el contingut per pantalla
document.write(ord1.toString());
document.write("1--------------------------------------------------------------");
//creem un ordinador amb dades
var ord2=new Ordinador(1,2,3,"hp","gl12");
//mostrem el contingut per pantalla
document.write(ord2.toString());
document.write("2--------------------------------------------------------------");
//creem un portatil sense autonomia
ord1.portatil();
//mostrem el contingut per pantalla
document.write(ord1.toString());
document.write("3--------------------------------------------------------------");
//creem un portatil amb autonomia
ord2.portatil(12);

//mostrem el contingut per pantalla
document.write(ord2.toString());