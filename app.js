//Imagenes
let img = ["img/piedra.png", "img/papel.png", "img/tijera.png"];
//Usar la variable de abajo hace que siempre salga la misma imagen al reiniciar
//let imgRamdon = img[Math.floor(Math.random() * img.length)];

//Botones
let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");
let jugar = document.getElementById("jugar");
let reiniciar = document.getElementById("reiniciar");
let activo = document.getElementsByClassName("activo");
let elegir = document.getElementById("elegir");

//Contenedores de imagenes
let imgJugador = document.getElementById("imgJugador");
let imgComp = document.getElementById("imgComp");

//Contendores de texto e inputs
let seleccionado = document.getElementById("seleccionado");
let numUsuarios = document.getElementById("numUsuarios");
let mensaje = document.getElementById("mensaje");
let numeroJugadores = document.getElementById("numeroJugadores");

//Lista de tareas
let tareas = ["Canta una cancion", "Toma un trago", "Baila por 30 segundos", "Cuenta un chiste"];

//Sonidos
let victoria = new Audio("sound/victoria.wav");
let derrota = new Audio("sound/derrota.wav");
let empate = new Audio("sound/empate.wav");
let tap = new Audio("sound/tap.wav");
let reset = new Audio("sound/reset.wav");

//Acciones de botones
piedra.addEventListener("click", function() {
    imgJugador.setAttribute("src", "img/piedra.png");
    tap.play();
});

papel.addEventListener("click", function() {
    imgJugador.setAttribute("src", "img/papel.png");
    tap.play();
});

tijera.addEventListener("click", function() {
    imgJugador.setAttribute("src", "img/tijera.png");
    tap.play();
});

jugar.addEventListener("click", function() {
    imgComp.setAttribute("src", img[Math.floor(Math.random() * img.length)]);
    piedra.style.display = "none";
    papel.style.display = "none";
    tijera.style.display = "none";
    jugar.style.display = "none";
    //src de las imagenes
    let jugadorSelec = imgJugador.getAttribute("src");
    let compSelec = imgComp.getAttribute("src");
    //Condiciones
    if (jugadorSelec === "img/piedra.png" && compSelec === "img/papel.png") {
        mensaje.innerHTML = tareas[Math.floor(Math.random() * tareas.length)];
        derrota.play();
    } else if (jugadorSelec === "img/piedra.png" && compSelec === "img/tijera.png") {
        mensaje.innerHTML = "Ganaste. Elige nuevamente";
        victoria.play();
    } else if (jugadorSelec === "img/papel.png" && compSelec === "img/piedra.png") {
        mensaje.innerHTML = "Ganaste. Elige nuevamente";
        victoria.play();
    } else if (jugadorSelec === "img/papel.png" && compSelec === "img/tijera.png") {
        mensaje.innerHTML = tareas[Math.floor(Math.random() * tareas.length)];
        derrota.play();
    } else if (jugadorSelec === "img/tijera.png" && compSelec === "img/piedra.png") {
        mensaje.innerHTML = tareas[Math.floor(Math.random() * tareas.length)];
        derrota.play();
    } else if (jugadorSelec === "img/tijera.png" && compSelec === "img/papel.png") {
        mensaje.innerHTML = "Ganaste. Elige nuevamente";
        victoria.play();
    } else {
        mensaje.innerHTML = "Empate. Juega de nuevo"
        empate.play();
    }
});

reiniciar.addEventListener("click", function() {
    imgComp.setAttribute("src", img[Math.floor(Math.random() * img.length)]);
    piedra.style.display = "inline";
    papel.style.display = "inline";
    tijera.style.display = "inline";
    jugar.style.display = "inline";
    imgJugador.setAttribute("src", "img/gifJug.gif");
    imgComp.setAttribute("src", "img/gifComp.gif");
    seleccionado.innerHTML = "Elige nuevamente";
    mensaje.innerHTML = "Empieza a jugar";
    reset.play();
});

elegir.addEventListener("click", function() {
    let ganador = Math.round(Math.random() * Number(numUsuarios.value));
    if (ganador === 0) {
        ganador = 1;
    }
    seleccionado.innerHTML =  "Jugador nro. " + ganador;
    tap.play();
});

//Otras acciones
window.addEventListener("load", function() {
    this.alert(`Piedra, papel o tijera:
    
    
    -Tomando en cuenta el numero de personas a jugar, asignale un numero a cada uno.
    -Inserta el numero de personas a jugar. Nuestro algoritmo elegira a un participante al azar en cada ronda para que juegue.
    -Basandose en el resultado, una accion al azar se encomendara al participante en juego.`);
    numUsuarios.value = 1;
});

numUsuarios.addEventListener("input", function() {
    numeroJugadores.innerHTML = numUsuarios.value + " participantes:";
})

