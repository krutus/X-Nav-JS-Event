
function handler(){
    color.style.backgroundColor = codigo.value;
}

var codigo = document.getElementById("Texto");
var salida = document.getElementById("color");
codigo.addEventListener("input", handler);
