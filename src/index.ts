class JogoDeBoliche {
  private pontos: number = 0
  private jogadas: number[] = Array(21).fill(0)
  private JogadaAtual: number = 0

  Jogar(pinos: number): void {
    this.jogadas[this.JogadaAtual++] = pinos
  };

  ObterPontuacao(): number {
    let pontuacao = 0
    let pontosDaJogada = 0
    for (let pontos = 0; pontos < 10; pontos++) {
      
      if (this.jogadas[pontosDaJogada] === 10) {
        pontuacao += 10 + this.jogadas[pontosDaJogada + 1] + this.jogadas[pontosDaJogada + 2]
        pontosDaJogada++

      } else if (this.jogadas[pontosDaJogada] + this.jogadas[pontosDaJogada + 1] === 10) {
        pontuacao += 10 + this.jogadas[pontosDaJogada + 2]
        pontosDaJogada += 2
      } else {
        pontuacao += this.jogadas[pontosDaJogada]
        pontosDaJogada += 2
      }
    }
    return this.pontos = pontuacao
  }
}


const jogo = new JogoDeBoliche()
jogo.Jogar(10)
jogo.Jogar(5)
jogo.Jogar(3)
console.log(jogo.ObterPontuacao())
