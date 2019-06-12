window.cipher = {
  // ...
};

//Declarando variables de los botones
var cifrar = document.getElementById("cifrado");
var descifrar = document.getElementById("descifrado");

//Agregando eventos a los botones
cifrar.addEventListener("click", encode);
descifrar.addEventListener("click", decode);

//funcion para cifrado
function encode() {
  let m = document.getElementById("textoATraducir").value; //Agarrando el valor del texto introducido
  let desplazar = document.getElementById("shift").value; //agarrando el valor del numero a lugares a desplazar
  let s = parseInt(desplazar);
  let result = " "; //variable a mostrar despues de aplicada la formula

  for (let i = 0; i < m.length; i++) {
    let letter = m.charCodeAt(i); //convirtiendo el texto a codigo ASCII
    if (65 <= letter && letter <= 90)
      result += String.fromCharCode(((letter - 65 + s) % 26) + 65);
    // Aplicando formula de conversion en caso de letras mayusculas
    else if (97 <= letter && letter <= 122)
      result += String.fromCharCode(((letter - 97 + s) % 26) + 97);
    // Aplicando forumula de conversion en caso de letras minusculas
    else result += m.charAt(i); // traspaso de caracteres no incluidos en los rangos anteriores
    document.getElementById("mostrarResultado").innerHTML = result; // impresion del resultado en el html
  }
}   






// funcion de descifrado//
function decode() {
  let m = document.getElementById("textoATraducir").value; //Agarrando el valor del texto introducido
  let desplazar = document.getElementById("shift").value; //agarrando el valor del numero a lugares a desplazar
  let s = parseInt(desplazar);
  let result = " "; //variable a mostrar despues de aplicada la formula
  for (let i = 0; i < m.length; i++) {
    let letter = m.charCodeAt(i); //convirtiendo el texto a codigo ASCII
    if (65 <= letter && letter <= 90 - s)
      result += String.fromCharCode(((letter - 65 - s) % 26) + 65);
    // Aplicando formula de conversion en caso de letras mayusculas
    else if (90 - s + 1 <= letter && letter <= 90 - s)
      result += String.fromCharCode(((letter - 97 - s) % 26) + 97);
    // Aplicando forumula de conversion en caso de letras minusculas
    else result += m.charAt(i); // traspaso de caracteres no incluidos en los rangos anteriores
    document.getElementById("mostrarResultado").innerHTML = result; // impresion del resultado en el html
  }
}
 

var dado = document.getElementById('dado');


function generarNumero() {  
  var numero = Math.floor(Math.random() * 6 + 1);
  dado.textContent = numero;
}

//65 es A y 90 es Z cuando 97 es a y 122 es z
// esto es un sistema americano de 1963 llamado ASCII

//increible
