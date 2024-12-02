import { conectaAPI } from "./conexionesApi.js";
async function filtrarVideo() {
    evento.preventDefault();
    const dataBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = conectaAPI.buscarVideos(dataBusqueda);

const lista = document.querySelector ("[data-lista]")

while(lista.firstChild){
    lista.removeChild(lista.firstChild);
}

busqueda.forEach(video=> lista.appendChild(crearCard(video.titulo,video.descripcio,video.url,video.imagen)));
if(busqueda.length==0){
    lista.innerHTML=`<h2 class="mensaje__titulo">No fueron encontrados elementos para ${datosDeBusqueda}</h2>`
}    

}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",evento=>filtrarVideo(evento))

