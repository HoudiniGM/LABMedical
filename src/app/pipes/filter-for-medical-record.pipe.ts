import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterForMedicalRecord'
})
export class FilterForMedicalRecordPipe implements PipeTransform {

  transform(clientes: any[], search: string): any[] {
    if (!clientes || !search) return clientes;

    search = search.toLowerCase();

    return clientes.filter( cliente => {
      return cliente['dados']['nome'].toLowerCase().includes(search) || cliente['dados']['id'].toLowerCase().includes(search)
    })
  }

}
