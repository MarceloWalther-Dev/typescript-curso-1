export class Negociacao{
    constructor(private _data: Date, public readonly quantidade: number, public readonly valor: number){}

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number{
        return this.quantidade * this.valor;
    }

    public static criarNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const regexDate = /-/g;
        const date = new Date(dataString.replace(regexDate, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
    
        return new Negociacao(date, quantidade, valor);
    }

}