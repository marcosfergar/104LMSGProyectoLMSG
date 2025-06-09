var titulo = document.getElementById("titulo")
var parrafo = document.getElementsByClassName("parrafo")
var cuerpo = document.getElementById("cuerpo")

titulo.innerHTML = "UD3.1 DOCUMENT OBJECT MODEL"
parrafo[0].innerText = "Parrafo 1 modificado"
parrafo[1].innerText = "Parrafo 2 modificado"
parrafo[2].innerText = "Parrafo 3 modificado"


cuerpo.style.textAlign="center"
titulo.style.fontWeight="bold"
titulo.style.marginBottom="15px"
titulo.style.textTransform="uppercase"

for (var i = 0; i < parrafo.length; i++) {
    parrafo[i].style.fontSize="18px"
    parrafo[i].style.padding="10px"
    parrafo[i].style.width="60%"
    parrafo[i].style.borderLeft="solid 5px"
    parrafo[i].style.borderRadius = "5px"
    parrafo[i].style.lineHeight="1.6"
    parrafo[i].style.margin = "10px auto"
}

parrafo[0].style.color="#e74c3c"
parrafo[0].style.backgroundColor="#ffe6e6"
parrafo[0].style.borderColor="#c0392b"

parrafo[1].style.color="#2ecc71"
parrafo[1].style.backgroundColor="#eaffea"
parrafo[1].style.borderColor="#27ea60"

parrafo[2].style.color="#3498db"
parrafo[2].style.backgroundColor="#e6f2ff"
parrafo[2].style.borderColor="#2980b9"

function saludar() {
    alert("Hola")
}

function cambiarColor(){
    var boton = document.getElementById("boton2")
    cuerpo.classList.toggle("Fondo_oscuro")
    boton.value=boton.value==="Fondo oscuro"?"Fondo Claro":"Fondo oscuro"
    //if de las salada
}

function cambiarParrafo(){
    var boton = document.getElementById("boton3")

    for (var i = 0; i < parrafo.length; i++){
        parrafo[i].classList.toggle("Rotar")
    }
}




