import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whereStartWith',
  pure: false
})
export class WhereStartWithPipe implements PipeTransform {

  // je veux deux params
  // 1st args e champ sur lequel je filtre
  // 2nd args la valeur a comparer
  //   -> | wherestartwith :'nom' : saearchtermer | ...
  transform(value: any[], propname: string, propvalue: string): any[] {
    console.log("my value "  + value);
    
    console.log("filtre avec " + propname +" et " + propvalue );
    
    if (Array.isArray(value) && value != null ){
      let sortieFiltered = value.filter((data, pos) =>{
        console.log('in filter');
        if (typeof(data[propname]) == 'string' && data[propname] != null && (<string>(data[propname])).startsWith(propvalue)){
          return true;
        }
        else 
          return false;   
      });
      console.log(sortieFiltered);
      return sortieFiltered;
    }
    else{
      return value;
    }
  }
}
