import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import {DiasDaSemana} from "../enums/dias-da-semana.js";
import { logarTempodeExecucao } from '../decorators/logar-tempo-de-execucao.js'
import { inspect } from "../decorators/inspect.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView: NegociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView: MensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data") as HTMLInputElement;  // microsoft informa que essa é a forma ideal para fazer cast
    this.inputQuantidade = <HTMLInputElement> document.querySelector("#quantidade"); // outra forma de fazer cast de forma explicita 
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect
  @logarTempodeExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criarNegociacao(

        this.inputData.value,
        this.inputQuantidade.value,
        this.inputValor.value
    );

    if (!this.validaData(negociacao.data)) {
        this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
        return ;
    }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizarView();
  }

  private validaData(data: Date): boolean {
    if (data.getDay() > DiasDaSemana.SABADO &&  data.getDay() < DiasDaSemana.DOMINGO) {
      return true;
    }
    return false;
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizarView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("!! Negociação adicionada com sucesso !!");
  }
}
