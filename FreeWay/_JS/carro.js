//código do carro

let xCarros = [800, 800, 800, 800, 800, 800, 1000, 1000, 1200, 1300];
let yCarros = [40, 96, 150, 310, 260, 200, 150, 40, 260, 310]; 
let velocidadeCarros = [2, 2.5, 3.2, 4.7, 4, 3.7, 3, 2, 4, 4.7];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
        }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 800;
   
          
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}