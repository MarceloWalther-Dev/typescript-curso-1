export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = (...args: Array<any>) => {
    console.log(`--- Método ${propertyKey}`);
    console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
    const retorno = metodoOriginal.apply(this, args);
    console.log(`--------- retorno: ${JSON.stringify(retorno)}`);
    return retorno;
  };
  return descriptor;
}
