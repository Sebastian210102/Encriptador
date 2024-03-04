
//Variables
let i=0;
let letra;
let arreglo = [];
let j=0;
let encriptado;
//Funcion para imprimir texto
function asignarTextoElemento(responder,info){
    let responderHTML = document.querySelector(responder);
    responderHTML.innerHTML = info;
    return;
}
//Encriptación




function Encriptación() {
let texto = document.getElementById("textoUsuario").value;
while(i<texto.length){
    if(texto[i].includes("a")){
        letra = "ai";
        
    }else if(texto[i].includes("o")){
        letra = "ober";
        }else if(texto[i].includes("i")){
                letra = "imes";

            }else if(texto[i].includes("e")){

                    letra = "enter";

                    }else if(texto[i].includes("u")){
                                letra = "ufat";
                            }else{
        
                                 letra = texto[i];
        
                                }
        arreglo.push(letra);
        i++;

}
    encriptado=arreglo.join("");
    asignarTextoElemento("p",encriptado);
    return;
}

//Desencriptación
function Desencriptación() {
    
    let desencriptado = "";
    let texto = document.getElementById("textoUsuario").value;

    while (i < texto.length) {
        if (texto[i] === "a" && texto[i + 1] === "i") {
            desencriptado += "a";
            i += 2;
        } else if (texto[i] === "o" && texto.substring(i, i + 4) === "ober") {
            desencriptado += "o";
            i += 4;
        } else if (texto[i] === "i" && texto.substring(i, i + 4) === "imes") {
            desencriptado += "i";
            i += 4;
        } else if (texto[i] === "e" && texto.substring(i, i + 5) === "enter") {
            desencriptado += "e";
            i += 5;
        } else if (texto[i] === "u" && texto.substring(i, i + 4) === "ufat") {
            desencriptado += "u";
            i += 4;
        } else {
            desencriptado += texto[i];
            i++;
        }
    }
    asignarTextoElemento("p",desencriptado);
    return;
}
function Reset() {
    // Reiniciar variables
    i = 0;
    letra = null;
    arreglo = [];
    j = 0;
    encriptado = null;
    
    // Limpiar contenido en elementos HTML
    document.getElementById("textoUsuario").value = ""; // Limpiar el campo de texto
    asignarTextoElemento("p", "Respues aquí "); // Limpiar el contenido del párrafo donde se muestra el resultado
    
    return;
}





