import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{

    private _inputData: HTMLInputElement;
    private _inputQuantidade:HTMLInputElement;
    private _inputValor:HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor(){

        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    adiciona(): void{

       const negociacao = this.criarNegociacao();
       this.negociacoes.adiciona(negociacao);
       this.limparFormulario();
    }

    criarNegociacao(): Negociacao{

        const regexDate = /-/g;
        const date = new Date(this._inputData.value.replace(regexDate, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);

        return  new Negociacao(date,quantidade,valor);
    }

    limparFormulario(): void{

        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }

}