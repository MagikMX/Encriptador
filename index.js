//  Variables
const encriptarButton = document.getElementById('encriptar');
const desencriptarButton = document.getElementById('desencriptar');
const container = document.getElementById('container');
const textArea = document.getElementById('texto-Encriptar');
const mensaje = document.getElementById('texto-Desencriptar');
const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;


//  Funciones


function btnEncriptar() {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value);
    textArea.value = textoDesencriptado;
    mensaje.value = "";
}

function foco() {
    document.getElementById('texto-Encriptar').focus();
}

function limpiar() {
    document.getElementById('texto-Encriptar').value = '';
}

function validar() {
    let nuevoTexto = textArea.value;
    if (nuevoTexto.match(letras) != null) {
        limpiar();
        foco();
        alert("No se admiten caracteres especiales.");
    }
}

foco();
encriptarButton.addEventListener('click', validar);
encriptarButton.addEventListener('click', btnEncriptar);

function encriptar(stringEncriptado) {
//  Nested Array index
    let matrizCodigo = [["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
//  Ciclo FOR
   for (let i = 0; i < matrizCodigo.length; i++) {
       if (stringEncriptado.includes(matrizCodigo[i][0])) {
           stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
       }
   }
   return stringEncriptado;
}

function desencriptar(stringdesencriptado) {
//  Nested Arrays
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]];

    stringdesencriptado = stringdesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringdesencriptado.includes(matrizCodigo[i][1])) {
    stringdesencriptado = stringdesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
   return stringdesencriptado;
}

function copiarTexto() {
    var copyText = document.getElementById("texto-Desencriptar");
//  Selecciona el campo de texto
    copyText.select();
//  Para dispositivos móviles
    copyText.setSelectionRange(0, 99999); 
//  Copia el texto dentro del campo
    navigator.clipboard.writeText(copyText.value);
//  Ventana emerge con el texto copiado
    alert("Texto copiado: " + copyText.value);
  }

