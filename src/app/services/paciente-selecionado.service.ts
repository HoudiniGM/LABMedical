import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteSelecionadoService {
  private paciente = new Subject<any>();
  data = this.paciente.asObservable();

  constructor() { }

  selecionarPaciente(paciente: any) {
    this.paciente.next(paciente);
  }
}
