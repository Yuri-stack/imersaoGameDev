class Jogo {
    constructor(){
        this.indice = 0
        this.mapa = fita.mapa
    }

    setup(){
        cenario = new Cenario(imagemCenario, 3)
        pontuacao = new Pontuacao()
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270)

        const inimigo = new Inimigo(
            matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10)
        const inimigoVoador = new Inimigo(
            matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10)
        const inimigoGrande = new Inimigo(
            matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10)

        inimigos.push(inimigo)
        inimigos.push(inimigoVoador)
        inimigos.push(inimigoGrande)

    }

    keyPressed(key){
        if(key === 'ArrowUp'){
            personagem.pular()
            somPulo.play()
        }
    }

    draw(){
        cenario.exibir()
        cenario.move()

        vida.exibir()
      
        pontuacao.exibir()
        pontuacao.atualizaPontuacao()
        
        personagem.exibir()
        personagem.aplicarGravidade()
        
        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo]
        const inimigoVisivel = inimigo.x < - inimigo.largura

        inimigo.velocidade = linhaAtual.velocidade

        inimigo.exibir()
        inimigo.move()
      
        if(inimigoVisivel){
            this.indice++

            inimigo.aparece()
      
          if(this.indice > this.mapa.length - 1){
            this.indice = 0
          }
        }
      
        if(personagem.colidir(inimigo)){
            vida.perdeVida()
            personagem.tornarInvencivel()
            
            if(vida.vidas == 0){
                vida.perdeVida()
                image(imagemGameOver, width/2 -200, height/3)
                noLoop()
            }
        }
    }
}