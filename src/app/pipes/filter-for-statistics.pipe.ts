import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterForStatistics'
})
export class FilterForStatisticsPipe implements PipeTransform {

  transform(clientes: any[], search: string): any[] {
    if (!clientes || !search) return clientes;

    search = search.toLowerCase();

    return clientes.filter( cliente => {
      return cliente['dados']['nome'].toLowerCase().includes(search) || cliente['dados']['telefone'].toLowerCase().includes(search) || cliente['dados']['email'].toLowerCase().includes(search);
    })
  }

}
