"use strict";
class JogoDeBoliche {
    constructor() {
        this.pontos = 0;
        this.jogadas = Array(21).fill(0);
        this.JogadaAtual = 0;
    }
    Jogar(pinos) {
        this.jogadas[this.JogadaAtual++] = pinos;
    }
    ;
    ObterPontuacao() {
        let pontuacao = 0;
        for (let i = 0; i < this.jogadas.length; i++) {
            pontuacao += this.jogadas[i];
        }
        return pontuacao;
    }
}
const jogo = new JogoDeBoliche();
jogo.Jogar(5);
jogo.Jogar(5);
jogo.Jogar(3);
console.log(jogo.ObterPontuacao());
