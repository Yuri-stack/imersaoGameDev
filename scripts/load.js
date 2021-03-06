function preload(){
    imagemCenario = loadImage('./images/cenario/floresta.png')
    imagemPersonagem = loadImage('./images/personagem/correndo.png')
  
    imagemInimigo = loadImage('./images/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('./images/inimigos/troll.png')
    imagemInimigoVoador = loadImage('./images/inimigos/gotinha-voadora.png')
  
    imagemGameOver = loadImage('./images/assets/game-over.png')
    imagemTelaInicial = loadImage('./images/assets/telaInicial.png')
    imagemVida = loadImage('./images/assets/coracao.png')

    fonteTelaInicial = loadFont('./images/assets/fonteTelaInicial.otf')

    fita = loadJSON('fita/fita.json')

    somJogo = loadSound('./sounds/trilha_jogo.mp3')
    somPulo = loadSound('./sounds/somPulo.mp3') 
  }