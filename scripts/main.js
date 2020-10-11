
function myFunction() {   
    //Añade una clase al elemento que tenga el id myDropdown
    document.getElementById("myDropdown").classList.toggle("show");
    ocultarForm();
    ocultarExp();

  }
  
  //Cierra el submenu si se clica fuera
  window.onclick = function(event){
    if(!event.target.matches('.drop-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0;  i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        //Busca dentro de drop-content los elementos con la clase show
        if (openDropdown.classList.contains('show')){
          //elimina la clase show de los elementos dentro de drop-content
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function mostrarPortafolio(){
    document.getElementById("portafolio").style.display="block";
    document.getElementById("mipc").style.display="none";
    document.getElementById("documentos").style.display="none";
    document.getElementById("age").style.display="none";
    document.getElementById("papelera").style.display="none";
    document.getElementById("formacion").style.display="none";
    document.getElementById("exp").style.display="none";
    document.getElementById("redes").style.display="none";
    ocultarForm();
    ocultarExp();

  }
  function ocultarPortafolio(){
    document.getElementById("portafolio").style.display="none";
  }

  function ocultarDocumentos(){
     document.getElementById("documentos").style.display="none";
  }
  function mostrarDocumentos(){
    document.getElementById("portafolio").style.display="none";
    document.getElementById("mipc").style.display="none";
    document.getElementById("age").style.display="none";
    document.getElementById("papelera").style.display="none";
    document.getElementById("formacion").style.display="none";
    document.getElementById("exp").style.display="none";
    document.getElementById("redes").style.display="none";
    document.getElementById("documentos").style.display="block";
    document.getElementById("carpeta").style.display="block";
    document.getElementById("aboutme").style.display="none";
    ocultarForm();
    ocultarExp();
  }
  


  function ocultarMiPC(){
    document.getElementById("aboutme").style.display="none";
    document.getElementById("mipc").style.display="none";
 }

 function mostrarMiPC(){
   document.getElementById("mipc").style.display="block";
   document.getElementById("documentos").style.display="none";
   document.getElementById("age").style.display="none";
   document.getElementById("papelera").style.display="none";
   document.getElementById("portafolio").style.display="none";
 }




   
 function ocultarPapelera(){
  document.getElementById("aboutme").style.display="none";
    document.getElementById("papelera").style.display="none";
 }

 function mostrarPapelera(){
   document.getElementById("papelera").style.display="block";
   document.getElementById("age").style.display="none";
   document.getElementById("mipc").style.display="none";
   document.getElementById("documentos").style.display="none";
   document.getElementById("portafolio").style.display="none";
   document.getElementById("formacion").style.display="none";
   document.getElementById("exp").style.display="none";
 }



 function ocultarErrorAge(){
    document.getElementById("age").style.display="none";
 }

 function mostrarErrorAge(){
   document.getElementById("age").style.display="block";
   document.getElementById("mipc").style.display="none";
   document.getElementById("documentos").style.display="none";
   document.getElementById("papelera").style.display="none";

 }
 function error(){
    var audio = document.getElementById("audio");
    audio.play();
 }

 function mostrarCarpeta(){
  document.getElementById("carpeta").style.display="block";
  document.getElementById("aboutme").style.display="none";

 }
 function mostrarUXUI(){
  document.getElementById("discoUXUI").style.display="block";

 }
 function ocultarUXUI(){
  document.getElementById("discoUXUI").style.display="none";

 }
 function mostrarProg(){
  document.getElementById("discoProg").style.display="block";

 }
 function ocultarProg(){
  document.getElementById("discoProg").style.display="none";

 }
 function mostrarMetod(){
  document.getElementById("discoMetod").style.display="block";

 }
 function ocultarMetod(){
  document.getElementById("discoMetod").style.display="none";

 }
 function mostrarIdiomas(){
  document.getElementById("discoIdiomas").style.display="block";

 }
 function ocultarIdiomas(){
  document.getElementById("discoIdiomas").style.display="none";

 }
 function mostrarOtros(){
  document.getElementById("discoOtros").style.display="block";

 }
 function ocultarOtros(){
  document.getElementById("discoOtros").style.display="none";

 }
 /************/

 function deDocumentosaPC(){
  document.getElementById("documentos").style.display="none";
  document.getElementById("mipc").style.display="block";
  ocultarForm();
  ocultarExp();
 }
 /********* */

 function mostrarAboutMe(){
  document.getElementById("carpeta").style.display="none";
  document.getElementById("aboutme").style.display="block";
  document.getElementById("exp").style.display="none";
  document.getElementById("formacion").style.display="none";
  ocultarForm();
  ocultarExp();

 }
 function ocultarAboutMe(){
  document.getElementById("aboutme").style.display="none";

 }
 function mostrarExp(){
  document.getElementById("exp").style.display="block";
  document.getElementById("formacion").style.display="none";

 }
 function ocultarExp(){
  document.getElementById("exp").style.display="none";

 }
 function mostrarForm(){
  document.getElementById("formacion").style.display="block";
  document.getElementById("exp").style.display="none";

 }
 function ocultarForm(){
 
  document.getElementById("formacion").style.display="none";

 }
function mostrarRedes(){
  document.getElementById("carpeta").style.display="none";
  document.getElementById("redes").style.display="block";
  document.getElementById("aboutme").style.display="none";
  ocultarForm();
  ocultarExp();
 
}

function sobremi(){
  document.getElementById("sobremi").style.display="block";
  document.getElementById("aboutme").style.display="block";
  document.getElementById("papelera").style.display="none";
  document.getElementById("age").style.display="none";
  document.getElementById("mipc").style.display="none";
  document.getElementById("documentos").style.display="none";
  document.getElementById("portafolio").style.display="none";
  document.getElementById("formacion").style.display="none";
  document.getElementById("exp").style.display="none";
}
function ocultarSobremi(){
  document.getElementById("sobremi").style.display="none";
  document.getElementById("aboutme").style.display="none";


}