import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { PacienteSelecionadoService } from 'src/app/services/paciente-selecionado.service';

@Component({
  selector: 'app-medical-record-list',
  templateUrl: './medical-record-list.component.html',
  styleUrls: ['./medical-record-list.component.css']
})
export class MedicalRecordListComponent {
  email: string = ''
  clientes: any[] = [];
  search: string = '';

  constructor(private localStorage: LocalstorageService, private paciente: PacienteSelecionadoService){
    this.email = localStorage.get('usuario').email;
    this.clientes = localStorage.get(this.email).clientes;
  }

  selecionar(paciente: any){
    this.paciente.selecionarPaciente(paciente);
  }
}
