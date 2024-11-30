import { conectaAPI } from "./conexionesApi";
async function filtrarVideo() {
    evento.preventDefault();
    const dataBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = conectaAPI.buscarVideos(dataBusqueda);
console.log(busqueda)
}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",evento=>filtrarVideo(evento))

