async function listarVideos(){
const conexion = await fetch ("http://localhost:3001/videos");

const conexionConvertida = conexion.json();

//console.log(conexionConvertida);
return  conexionConvertida

}

export const conexionApi={
listarVideos

}

//listarVideos();