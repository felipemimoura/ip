class JogoDeBoliche {
  private pontos: number = 0
  private jogadas: number[] = Array(21).fill(0)
  private JogadaAtual: number = 0

  Jogar(pinos: number): void {
    this.jogadas[this.JogadaAtual++] = pinos
  };

  ObterPontuacao(): number {
    let pontuacao = 0
    let b = 0

    for (let i = 0; i < 10; i++) {
      //Calculo do Spare
      if (this.jogadas[b] + this.jogadas[b + 1] === 10) {
        pontuacao += 10 + this.jogadas[b + 2]
        b +=2
      }else{
        pontuacao += this.jogadas[b]
        b += 2
      }
    }
    return this.pontos = pontuacao
  }
}


const jogo = new JogoDeBoliche()
jogo.Jogar(5)
jogo.Jogar(5)
jogo.Jogar(3)
console.log(jogo.ObterPontuacao())
