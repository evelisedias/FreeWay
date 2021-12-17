function setup() {
  createCanvas(800, 400);
  somDaTrilha.loop();

  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro(); 
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  
}

