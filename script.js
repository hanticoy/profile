function modificarPerfil() {

    let valor = document.querySelector("#nombrePersona");
    
    if (valor.innerText == 'Hugo Anticoy'){
        valor.innerText =  'Eduardo Maturana'    
    }
    else
    {
        valor.innerText =  'Hugo Anticoy'
    }
    
}

let cantConnRq = 2;
function eliminaUserRequest(id) {

    var elems = document.querySelectorAll("#userRequest"); 
    elems[id].innerHTML="";

    let valor = document.querySelector("#cantConnRequest");  
    cantConnRq--
    valor.innerText = cantConnRq;
    
}

let userConnects = 500

function agregaUserConn(nombre,id) {

    //elimino y decremento los request de conecciones
    let userRequest = document.querySelectorAll("#userRequest"); 
    userRequest[id].innerHTML="";

    let valor = document.querySelector("#cantConnRequest");  
    cantConnRq--
    valor.innerText = cantConnRq;

    //aumento el contador de usuarios conectados
    
    let valor2 = document.querySelector("#cantConnect");  
    userConnects++
    valor2.innerText = '+' + userConnects;


    let elems = document.querySelector("#userConnList"); 
    let htmlNew ="<ul class='lista' id='userConn'><li><img class='persona' src='images/adrien-s.jpg'><b>" +  nombre + "</b></li></ul>"
  
    elems.innerHTML = htmlNew + elems.innerHTML
    
}