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
        let b = 0;
        for (let i = 0; i < 10; i++) {
            //Calculo do Spare
            if (this.jogadas[b] + this.jogadas[b + 1] === 10) {
                pontuacao += 10 + this.jogadas[b + 2];
                b += 2;
            }
            else {
                pontuacao += this.jogadas[b];
                b += 2;
            }
        }
        return this.pontos = pontuacao;
    }
}
const jogo = new JogoDeBoliche();
jogo.Jogar(5);
jogo.Jogar(5);
jogo.Jogar(3);
console.log(jogo.ObterPontuacao());
