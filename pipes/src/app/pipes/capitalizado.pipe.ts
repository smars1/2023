import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas : boolean = true): string {

    //value: value.toLocaleLowerCase();
    //let palabras : string[] = value.split(' ');
    let palabras : string[] = value.toLocaleLowerCase().split(' ');
    if(todas){
      palabras = palabras.map(valor => {
        return valor[0].toUpperCase() + valor.substring(1)
      });
    }else{
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substring(1);
    }
    return palabras.join(' ');
  }

}
