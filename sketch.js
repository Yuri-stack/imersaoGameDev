let imagemCenario
let imagemPersonagem
let cenario
let somJogo
let personagem

function preload(){
  imagemCenario = loadImage('./images/cenario/floresta.png')
  imagemPersonagem = loadImage('./images/personagem/correndo.png')
  somJogo = loadSound('./sounds/trilha_jogo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  cenario = new Cenario(imagemCenario, 3)
  personagem = new Personagem(imagemPersonagem)
  frameRate(40)
  somJogo.loop()
  
}

function draw() {
  cenario.exibir()
  cenario.move()
  
  personagem.exibir()

}