
//alerta para el texto de



// funcion que se encarga de buscar una etiqueta p, en este caso el p

// de la posicion 0, cuando lo encuentre desencadeenara el evento onclick, que tendra como

//funcion  alerta, que se encarga de mostrar un mensaje en panatalla



function alerta() {
    
    alert("Que hay de nuevo bro");
}



function ejecuta(){

    //primero que coincida con el selector de clase
    //document.querySelector(".segundo").onclick=alerta;

    //apuntaria al id que coincida con la busqueda

    //nos busca un elemento en concreto, segun la clase o id
    //cuando se va hacer una busqueda en especifica se debe buscar con orden de jerarquia
    // donde principal es el div, p es el parrafo y el last-child, es el pseudocodigo que equivale al ultimo de los p
    // document.querySelector(".principal p:last-child").onclick=alerta;

    //creo una variable para guardar el array de la query segun los criterios.
    //en este caso rama principal div, todos los p, incluyendo los span
    let elementos = document.querySelectorAll(".principal p, span");

    //recorro con un ciclo las posiciones del array elementos.length.
    for (let i = 0; i < elementos.length; i++) {
        
        //document.querySelectorAll(".principal p")[i].onclick=alerta
        
        // por cada vuelta del ciclo, de la variable elemento.en cada posicion del array
        //me ejecute el evento onclick que me llama la function alerta.
        elementos[i].onclick=alerta;
    }
}
// function ejecuta(){

//     // for (var i = 0; i <x; i++) {
        
//     //     var x = document.getElementsByClassName("segundo")[i].onclick =alerta;
        
//     // }


//     //ciclo for para localizar todos los p y aplicarles la siguiente funcion.
//     // for (var i= 0; i < 3; i++) {

//     //     document.getElementsByTagName("p") [i].onclick=alerta; 
//     // }

//     //documento.getElementsByTagName("p")

//     // document.getElementsByTagName("p") [2].onclick=alerta; identifica por la etiqueta

//     //document.getElementsByClassName("relevante").onclick=alerta; //identifica por el nombre de clase
    
//     //document.getElementById("relevante2").onclick=alerta; // identifica por el nombre del ID
    
// }

//evento de ventana, onload, cuando se cargue la ventana, ejecute el siguiente codigo. de ejecuta
window.onload=ejecuta();
