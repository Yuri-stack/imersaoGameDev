function setup() {
  createCanvas(windowWidth, windowHeight)

  frameRate(40)
  somJogo.loop()

  jogo = new Jogo()
  telaInicial = new TelaInicial()
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2)

  jogo.setup()

  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  }
  
}

function keyPressed(){
  jogo.keyPressed(key)
}

function draw() {
  cenas[cenaAtual].draw()
}