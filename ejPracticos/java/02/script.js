function genera_tabla() {
    var cuerpo = document.querySelector("body")
    var filas = document.getElementById("filas").value
    var columnas = document.getElementById("numerocolumnas").value


    cuerpo.innerHTML =
    '<h1>Ejemplo 8 DOM: Crear tabla</h1>'
    +'<label for="filas">Numero de filas:</label>'
    +'<input type="number" id="filas" min="1" max="10" value="2">'
    +'<label for="numerocolumnas">Numero de filas:</label>'
    +'<input type="number" id="numerocolumnas"  min="1" max="10" value="2">'
    +'<input type="button" value="Genera una tabla" onclick="genera_tabla()" />'
    +'<footer><div>Todos los derechos reservados. Creado por:'
    +'<a href="https://daw104.ieslossauces.es/104LMSGIProyectoLMSGI/index.html">'
    +'<address style="display: inline;">Marcos Fernández</address>'
    +'</a></div></footer>'


    var tabla = document.createElement("table")
    var tbody =document.createElement("tbody")
    for (let i = 0; i < filas; i++) {
        var tr = document.createElement("tr")
        for (let j = 0; j < columnas; j++) {
            var td = document.createElement("td")
            var textoCelda = document.createTextNode("Fila " + (i+1) + ", Columna " + (j+1))
            td.appendChild(textoCelda)
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    tabla.appendChild(tbody)
    cuerpo.appendChild(tabla)
    tabla.setAttribute("border","2")
}