import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value:string, mostrar: boolean = true): string {
    //return (mostrar) ? '*' .repeat(value.length): value;  <== esto es lo mism que el condicional debajo


    if(mostrar){
      return '*' .repeat(value.length);
    } else{
      return  value;
    }
  }

}
