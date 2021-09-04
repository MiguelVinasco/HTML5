function tipoflor(){

    alert("Esto es un pensamiento esta cogiendo este efecto");
}



// implementacion de una accion correctamente, en este caso por Tag y la posicion del array.
// function dartipoflor() {
    
//     document.getElementsByTagName("img")[0].onclick = tipoflor;
// }

//add listener metodo, 3 parametros: el evento, la funcion  a ejecutar
//y el valor boolean

let imagen = new Array(3);

// function manejaflor() {
    
//     let imagen = document.getElementsByTagName("img")[0];

//     imagen.addEventListener("click", tipoflor, false);
    
// }

function manejaflor() {

    for (let i = 0; i < 4; i++) {
        
        imagen[i] = document.getElementsByTagName("img")[i];
        
    }
    

    //imagen 1
    //nuevo add listener con bucle
    imagen[0].addEventListener("mouseover", function(){imagen[0].width=220;imagen[0].height=220;},false);
    imagen[0].addEventListener("mouseout", function(){imagen[0].width=200;imagen[0].height=200;},false);
    imagen[0].addEventListener("click", tipoflor, false);

    //imagen 2
    imagen[1].addEventListener("mouseover", function(){imagen[1].width=220;imagen[1].height=220;},false);
    imagen[1].addEventListener("mouseout", function(){imagen[1].width=200;imagen[1].height=200;},false);
    imagen[1].addEventListener("click", tipoflor, false);

    //imagen 3
    imagen[2].addEventListener("mouseover", function(){imagen[2].width=220;imagen[2].height=220;},false);
    imagen[2].addEventListener("mouseout", function(){imagen[2].width=200;imagen[2].height=200;},false);
    imagen[2].addEventListener("click", tipoflor, false);

    //puede estar a la espera de 2 eventos en este caso, de maximizar y minimizar al mismo tiempo
    //cuando el mouse se pone sobre la imagen y cuando se quita.
    // imagen.addEventListener("mouseover", maximize, false)
    // imagen.addEventListener("mouseout", minimize,false);
    // imagen.addEventListener("click", tipoflor, false);
    
}

//funcion para aumentar la imagen
// function maximize(){

//     imagen.width = 300;
//     imagen.height = 300;
    

// }

//funcion para disminuir la imagen
// function minimize(){

//     imagen.width = 200;
//     imagen.height = 200;
// }



//window.onload=manejaflor();

window.addEventListener("load",manejaflor,false);
