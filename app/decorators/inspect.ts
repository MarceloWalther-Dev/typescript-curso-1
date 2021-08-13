export function inspect(){
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor)=>{
        
        const metodoOriginal = descriptor.value;
        descriptor.value = (...args: Array<any>) =>{

            const retorno = metodoOriginal.apply(this, args)
            return retorno;
        }
        return descriptor;
    }
}