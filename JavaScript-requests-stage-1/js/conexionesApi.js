async function listaVideos() {
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!conexion.ok) {
        throw new Error("Error al listar los videos");
    }

    const conexionConvertida = await conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida;
}

async function crearVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    });

    if (!conexion.ok) {
        throw new Error("Error al crear el video");
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conectaAPI = {
    listaVideos,
    crearVideo
};
