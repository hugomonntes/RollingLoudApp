let titulo = document.getElementById('tituloReloj');
let fechaLimite = new Date()
addEventListener('load', mostrarReloj);
setInterval(mostrarReloj, 1000);
function mostrarReloj(){
    let fechaActual = new Date()
    let dia = fechaActual.getDay()
    let fechaExacta = fechaActual.toLocaleTimeString();
    titulo.innerHTML = fechaExacta;
}