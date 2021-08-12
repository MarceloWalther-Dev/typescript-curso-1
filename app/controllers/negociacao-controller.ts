import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import{ MensagemView } from "../views/mensagem-view.js"



export class NegociacaoController{

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView: MensagemView = new MensagemView('#mensagemView'); 

    constructor(){

        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
        
    }

    adiciona(): void{

       const negociacao = this.criarNegociacao();
       this.negociacoes.adiciona(negociacao);
       this.negociacoesView.update(this.negociacoes);
       this.mensagemView.update('!! Negociação adicionada com sucesso !!')
       console.log(this.negociacoes);
       this.limparFormulario();
    }

    criarNegociacao(): Negociacao{

        const regexDate = /-/g;
        const date = new Date(this.inputData.value.replace(regexDate, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return  new Negociacao(date,quantidade,valor);
    }

    limparFormulario(): void{

        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

}