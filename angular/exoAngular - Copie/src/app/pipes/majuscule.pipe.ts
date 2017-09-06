import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'majuscule'
})
export class MajusculePipe implements PipeTransform {

  // fo,ction de transformation sur les donnes transmise au pipes 
  /*
    en entree la valeur et des args et en retour on sort une chaine de caractere
  */
  transform(value: string, args?: any): string {
    if (typeof(value) != "undefined" && value != null){
      return value.toUpperCase();
    }
    return value;
  }

}
