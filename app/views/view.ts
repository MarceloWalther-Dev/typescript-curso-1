import { inspect } from "../decorators/inspect.js";
import { logarTempodeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { Negociacoes } from "../models/negociacoes.js";

export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar : boolean = false;

    constructor(selector:string, escapar?: boolean) {
        const elemento = document.querySelector(selector);

        if(elemento) {
            this.elemento = elemento as HTMLElement;
        }else{
            throw new Error(`Seletor ${selector} não existe no DOM, por favor verificar`);
        }

        if(escapar){
            this.escapar = escapar;
        }
    }
    
    @inspect()
    @logarTempodeExecucao(true)
    public update(model : T) : void{
        let template = this.template(model);

        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.elemento.innerHTML = template;
    }

    protected abstract template(model:T) : string

}