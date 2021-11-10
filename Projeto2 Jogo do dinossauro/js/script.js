const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let pulando = false;
let gameOver = false;
let position = 0;

/* métodos do dinossauro*/
function pular(tecla){
    if(tecla.keyCode === 32){
        if(!pulando )pulo();
    } 
};

function pulo(){
    
    pulando = true;
    let subida = setInterval(() => {
        if(position >= 150){
            clearInterval(subida);
            let descida = setInterval(() => {
                if(position <= 0) {
                    clearInterval(descida);
                    pulando = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + "px";
                }
            },20)
        } else {
            position += 20;
        dino.style.bottom = position + "px";
        }
    }, 20);
};

/* métodos do cacto */

function criarCacto(){

    const cacto = document.createElement("div");
    let cactoPosition = 1000;
    let aparicaoRandomica = Math.random() * 6000;
    
    if(gameOver) return;

    cacto.classList.add("cacto");
    cacto.style.left = 1000 + "px";
    background.appendChild(cacto);

    let cactoAndar = setInterval(() => {
        if(cactoPosition < -60){
            clearInterval(cactoAndar);
            background.removeChild(cacto);
        } else if(cactoPosition > 0 && cactoPosition < 60 && position < 60){
            clearInterval(cactoAndar);
            gameOver = true;
            document.body.innerHTML = '<h1 class = "game-over">Fim de Jogo</h1>';
        } else {
            cactoPosition -= 10;
            cacto.style.left = cactoPosition + "px";
        }
    }, 20);
    setTimeout(criarCacto, aparicaoRandomica);
};



criarCacto();
document.addEventListener("keyup", pular);