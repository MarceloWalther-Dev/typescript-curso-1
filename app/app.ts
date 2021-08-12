import {NegociacaoController} from './controllers/negociacao-controller.js';
import {NegociacoesView} from './views/negociacoes-view.js';

const controller: NegociacaoController = new NegociacaoController();

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
})

