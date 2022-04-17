export interface Alumno{
    usuarioA:string,
    contraseniaA:string,
    nombreA:string,
    apellidoPA:string,
    apellidoMA:string,
    sexoA:string
}
export function buscar(lista: Alumno[],user:string,password:string):number{
    let cont:number = 0;
    while(cont < lista.length){
        if(lista[cont].usuarioA == user && lista[cont].contraseniaA == password){
            return cont;
        }
        cont++;
    }
    return -1;
}