import {NegociacaoController} from './controllers/negociacao-controller.js';
import {NegociacoesView} from './views/negociacoes-view.js';

const controller: NegociacaoController = new NegociacaoController();

const form = document.querySelector('.form');

if(form){
    form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
    });
}else{
    throw new Error(`Impossivel iniciar aplicação pois o seletor ${form} não existe no DOM`);
}



