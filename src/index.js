var dado = document.getElementById('dado');


function generarNumero() {
  var numero = Math.floor(Math.random() * 6 + 1);
  dado.textContent = numero;
}