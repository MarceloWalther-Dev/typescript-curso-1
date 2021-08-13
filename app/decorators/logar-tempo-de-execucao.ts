export function logarTempodeExecucao(emSegundos: boolean = false){ // se eu não passar o parametro ele vai adotar como paramentro falso
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor)=>{
        
        //propertyKey é o metodo que vai usar a anotação vai aparecer o nome do metodo

        const metodoOriginal = descriptor.value;

        descriptor.value = (...args: Array<any>)=>{
            let divisor = 1;
            let unidade = 'milesegundos'
            if(emSegundos){
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            
            const retorno = metodoOriginal.apply(this, args);

            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de ececução: ${(t2-t1/divisor)} ${unidade}`);
            
            retorno
        }

        return descriptor;
    }
}