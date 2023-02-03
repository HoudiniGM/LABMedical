import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  email: string = '';
  search: string = '';
  clientes: any[] = [];
  consultas: number;
  exames: number;


  constructor(private localStorage: LocalstorageService){
    this.email = localStorage.get('usuario').email;
    this.clientes = localStorage.get(this.email).clientes;
    this.consultas = this.contagem('consultas');
    this.exames = this.contagem('exames');
  }


  contagem(key: string){
    let cont = 0;
    this.clientes.forEach(cliente => {
      cliente[key] ? cont += cliente[key].length : cont += 0;
    });

    return cont;
  }
}
