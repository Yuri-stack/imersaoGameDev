class Personagem extends Animacao{
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
      super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
      
      this.yInicial = height - this.altura
      this.y = this.yInicial
      this.gravidade = 5
      this.velocidadePulo = 0
    }
    
    pular(){
      this.velocidadePulo = - 30
    }

    aplicarGravidade(){
      this.y = this.y + this.velocidadePulo
      this.velocidadePulo = this.velocidadePulo + this.gravidade

      if(this.y > this.yInicial){
        this.y = this.yInicial
      }
    }

    colidir(inimigo){

      const precisao = .7
      const colisao = collideRectRect(
        this.x, 
        this.y, 
        this.largura * precisao, 
        this.altura * precisao, 
        inimigo.x, 
        inimigo.y, 
        inimigo.largura * precisao, 
        inimigo.altura * precisao
      )  
      
        return colisao
    }

  }