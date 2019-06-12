
function pasarPagina(){ 

document.getElementById("primeraPagina").style.display="none";
document.getElementById("segundaPagina").style.display="block";
document.getElementById("terceraPagina").style.display="block";

Document.getElementById("adelantar").addEventListener("click", adelantar);

}

function atrasPagina(){ 
function pasarPagina(){ 

document.getElementById("primeraPagina").style.display="block";
document.getElementById("segundaPagina").style.display="none";
document.getElementById("terceraPagina").style.display="block";

Document.getElementById("adelantar").addEventListener("click", adelantar);
document.getElementById("regresar").addEventListener("click", regresar)
}



function atrasPagina(){ 
document.getElementById("primeraPagina").style.display="block";
document.getElementById("segundaPagina").style.display="block";
document.getElementById("terceraPagina").style.display="none";

document.getElementById("regresar").addEventListener("click", regresar);

}

{ 
Document.getElementById("adelantar").addEventListener("click", adelantar);
document.getElementById("regresar").addEventListener("click", regresar);

};


//65 es A y 90 es Z cuando 97 es a y 122 es z
// esto es un sistema americano de 1963 llamado ASCII




}


var dado = document.getElementById('dado');


function generarNumero() {  
  var numero = Math.floor(Math.random() * 6 + 1);
  dado.textContent = numero;

 }
