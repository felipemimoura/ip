class JogoDeBoliche {
  private pontos: number = 0
  private jogadas: number[] = Array(21).fill(0)
  private JogadaAtual: number = 0

  Jogar(pinos: number): void {
    this.jogadas[this.JogadaAtual++] = pinos
    // console.log(this.jogadas)

  };

  ObterPontuacao(): number {
    let pontuacao = this.pontos
    let pontosDaJogada = 0
    for (let pontos = 0; pontos < 10; pontos++) {

      if (this.jogadas[pontosDaJogada] === 10) {

        pontuacao += 10 + this.jogadas[pontosDaJogada + 1] + (this.jogadas[pontosDaJogada + 2] * 2)

        pontosDaJogada++

      } else if (this.jogadas[pontosDaJogada] + this.jogadas[pontosDaJogada + 1] === 10) {
        pontuacao += 10 + this.jogadas[pontosDaJogada + 2]
        pontosDaJogada += 2
      } else {
        pontuacao += this.jogadas[pontosDaJogada] + this.jogadas[pontosDaJogada + 1]
        pontosDaJogada += 2
      }
    }
    return pontuacao
  }
}
