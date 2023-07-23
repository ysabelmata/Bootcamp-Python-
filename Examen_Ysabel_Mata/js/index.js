function alertLinux(element) {
    alert("This game is supported on Linux");
}

function incrementarCarrito() {
    let cantidadTag = document.getElementById("cantidad");
    console.log(cantidadTag);
    let contarCarrito = Number(cantidadTag.innerText);

    contarCarrito += 1;

    cantidadTag.innerText = contarCarrito;
}

function cambiar() {

    let imagen = document.getElementById("imagen-juego");

    if (imagen.src.includes("/images/stonepunk.png")) {
        imagen.src = "./images/pixel-ninjas-2.png";
    }
    else {
        imagen.src = "./images/stonepunk.png";
    }
}

