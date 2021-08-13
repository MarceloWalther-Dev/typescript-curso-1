export function logarTempodeExecucao(){
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor)=>{
        
        //propertyKey é o metodo que vai usar a anotação

        const metodoOriginal = descriptor.value;

        descriptor.value = (...args: Array<any>)=>{
            const t1 = performance.now();
            
            const retorno = metodoOriginal();

            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de ececução: ${(t2-t1/1000)} segundos`);
            
            retorno
        }

        return descriptor;
    }
}