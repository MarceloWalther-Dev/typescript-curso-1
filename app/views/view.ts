import { inspect } from "../decorators/inspect.js";
import { logarTempodeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { Negociacoes } from "../models/negociacoes.js";

export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar : boolean = false;

    constructor(selector:string) {
        const elemento = document.querySelector(selector);

        if(elemento) {
            this.elemento = elemento as HTMLElement;
        }else{
            throw new Error(`Seletor ${selector} não existe no DOM, por favor verificar`);
        }
    }
    
    public update(model : T) : void{
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model:T) : string

}