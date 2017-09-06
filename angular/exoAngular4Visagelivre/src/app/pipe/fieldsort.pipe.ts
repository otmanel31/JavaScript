import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldsort'
})
export class FieldsortPipe implements PipeTransform {

  transform(value: any[], fieldname: string, sortOrder: boolean): any[] {
    if (Array.isArray(value) && value != null){
      let result = value.sort((a, b)=>{
        let comparaison: number = 0;
        if (a[fieldname] > b[fieldname]) comparaison = 1;
        else if (a[fieldname] < b[fieldname]) comparaison = -1;
        if (!sortOrder) comparaison = -comparaison;
        return comparaison;
      })
      return result; // result contient le tabkleau trié
    }
    return value;
  }

}
