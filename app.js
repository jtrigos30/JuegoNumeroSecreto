let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 30;

//console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsurario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if (numeroDeUsurario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        // el usuario no acertó.

        if (numeroDeUsurario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        } else {
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length ==numeroMaximo){
         asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {

        // si el numero generado esta incluido en la lista

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja 

    limpiarCaja();

    //Indicar mensaje de inicio
    //Generar numero aleatorio 
    //Inicializar el numero de intentos
    
    condicionesIniciales();

    //Desabilitar el boton de nuevo Juego
    document.getElementById('reiniciar').setAttribute('disabled','true');


}

condicionesIniciales();

