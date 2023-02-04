import { Component } from '@angular/core';
import { PacienteSelecionadoService } from 'src/app/services/paciente-selecionado.service';

@Component({
  selector: 'app-pacient-data',
  templateUrl: './pacient-data.component.html',
  styleUrls: ['./pacient-data.component.css']
})
export class PacientDataComponent {
  paciente: any;
  validar: any = {
    dados: false,
    consultas: false,
    exames: false
  }

  constructor(private pacienteSelecionado: PacienteSelecionadoService){
    this.pacienteSelecionado.data.subscribe( (data: any) => {
      this.paciente = data;
    })
  }

  abrir(rota: string){
    this.validar.dados = false;
    this.validar.consultas = false;
    this.validar.exames = false;

    this.validar[rota] = true;
  }
}
