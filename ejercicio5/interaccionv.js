

let mivideo, reproducir, barra, barprogres



function comenzar(){

    mivideo = document.getElementsByClassName("mivideo");
    reproducir = document.getElementsByClassName("reproducir");
    barra = document.getElementsByClassName("barra");
    barprogres = document.getElementsByClassName("barprogres");


    reproducir.addEventListener("click", empezar,false);

    barprogres.addEventListener("click", cargando, false);
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

    if (mivideo.paused == false && mivideo.ended==false){

        mivideo.paused();
        
        
    }else{
        
        mivideo.play();
        reproducir.innerHTML ="Pausar"
    }

}


window.addEventListener("load",comenzar,false);