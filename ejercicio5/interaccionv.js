

var mivideo, reproducir, barra, barprogres, maximo;

maximo = 450;



function comenzar(){

    mivideo = document.getElementsByClassName("mivideo");
    reproducir = document.getElementsByClassName("reproducir");
    barra = document.getElementsByClassName("barra");
    barprogres = document.getElementsByClassName("barprogres");


    reproducir.addEventListener("click", empezar, false);

    barra.addEventListener("click", cargando, false);
}



//metodos y metodos de objeto video para

// propiedades:

// duration: duracion del video
// currentTime: tiempo actual del videos
// paused: video pausado
// ended: video finalizado

// Metodos:
// play()
// pause()
function empezar(){

    if((mivideo.paused ==false) && (mivideo.ended==false)){ 
        mivideo.pause(); 
        reproducir.innerHTML ="Play";
    } 
    else 
    { 
        mivideo.play(); 
        reproducir.innerHTML ="Pause";

        bucle = setInterval(estado, 30);
    } 
}

function estado(){

    if (mivideo.ended == false) {
        
        let total = parseInt(mivideo.currentTime*maximo / mivideo.duration);

        barprogres.style.width = total+"px";
    }
}

function cargando(posicion){

    if ((mivideo.paused == false) && (mivideo.ended == false)) {

        let ratonx = posicion.pageX - barra.offset().left;

        let nuevoTiempo = ratonx * mivideo.duration/maximo;

        mivideo.currentTime = nuevoTiempo;

        barprogres.style.width = ratonx+"px";
    }
}

window.addEventListener("load",comenzar,false);