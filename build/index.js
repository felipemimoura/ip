"use strict";
// const sessao: Array<[]> = []
// const jogadas: Object = {
//   primeiraJogada: number,
//   segundaJogada: Number | null
// }
class JogoDeBoliche {
    constructor() {
        this.rolls = [];
    }
    Jogar(pinos) {
        this.rolls.push(pinos);
    }
    ObterPontuacao() {
        let resultado = 0;
        for (let i = 0; i < 20; i++) {
            resultado += this.rolls[i];
        }
        return resultado;
    }
}
const jogo = new JogoDeBoliche();
jogo.Jogar(5);
jogo.ObterPontuacao();
