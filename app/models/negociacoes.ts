import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{ // ReadonlyArray<Negociacao> é uma lista de leitura de renegociacao
        return this.negociacoes;
    }
}