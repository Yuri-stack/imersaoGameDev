class Pontuacao{
    constructor(){
        this.pontos = 0
    }

    exibir(){
        textAlign(RIGHT)
        fill('#FFF')
        textSize(50)
        text(parseInt(this.pontos), width - 30, 50)
    }

    atualizaPontuacao(){
        this.pontos = this.pontos + 0.2
    }
}