class JogoDeBoliche {
  private pontos: number = 0
  private jogadas: number[] = Array(21).fill(0)
  private JogadaAtual: number = 0

  Jogar(pinos: number): void {
    this.jogadas[this.JogadaAtual++] = pinos
  };

  ObterPontuacao(): number {
   let pontuacao = 0
   for(let i = 0; i< this.jogadas.length; i++){
     pontuacao += this.jogadas[i]
   }
   return pontuacao
  }
}


const jogo = new JogoDeBoliche()
jogo.Jogar(5)
jogo.Jogar(5)
jogo.Jogar(3)
console.log(jogo.ObterPontuacao())
