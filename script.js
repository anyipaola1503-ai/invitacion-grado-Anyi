// =====================
// MUSICA
// =====================
const musica = document.getElementById("musica");
const btn = document.getElementById("btnMusica");
const icono = document.getElementById("iconoMusica");

btn.addEventListener("click", () => {
    if(musica.paused){
        musica.play()
        .then(() => {
            icono.src = "img/pausa.png";
        })
        .catch(() => {
            console.log("El navegador bloqueó el audio");
        });
    }else{
        musica.pause();
        icono.src = "img/play.png";
    }
});


// =====================
// CONTADOR
// =====================

// Abril = 3
const fecha = new Date(2026, 3, 25, 20, 0, 0).getTime();

function actualizarContador(){

    const ahora = new Date().getTime();
    const distancia = fecha - ahora;

    if(distancia < 0){
        document.getElementById("dias").innerText = "0";
        document.getElementById("horas").innerText = "0";
        document.getElementById("minutos").innerText = "0";
        document.getElementById("segundos").innerText = "0";
        return;
    }

    document.getElementById("dias").innerText =
    Math.floor(distancia/(1000*60*60*24));

    document.getElementById("horas").innerText =
    Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

    document.getElementById("minutos").innerText =
    Math.floor((distancia%(1000*60*60))/(1000*60));

    document.getElementById("segundos").innerText =
    Math.floor((distancia%(1000*60))/1000);
}

// Ejecutar inmediatamente
actualizarContador();

// Ejecutar cada segundo
setInterval(actualizarContador, 1000);