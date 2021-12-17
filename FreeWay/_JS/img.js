let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCarro7;
let imagemCarro8;
let imagemCarro9;
let imagemCarro10;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

// Carregando imagens
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3= loadImage("imagens/carro-3.png");
  imagemCarro4 = loadImage("imagens/carro4.png");
  imagemCarro5 = loadImage("imagens/Carro5.png");
  imagemCarro6= loadImage("imagens/carro6.png");
  imagemCarro7 = loadImage("imagens/carro7.png");
  imagemCarro8 = loadImage("imagens/carro8.png");
  imagemCarro9= loadImage("imagens/carro9.png");
  imagemCarro10= loadImage("imagens/carro10.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6, imagemCarro7, imagemCarro8, imagemCarro9, imagemCarro10];
 somDaTrilha = loadSound("Sons/trilha.mp3");
 somDaColisao = loadSound("Sons/colidiu.mp3")
 somDoPonto= loadSound("Sons/pontos.wav");
}

