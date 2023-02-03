import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-medical-record-list',
  templateUrl: './medical-record-list.component.html',
  styleUrls: ['./medical-record-list.component.css']
})
export class MedicalRecordListComponent {
  email: string = ''
  clientes: any[] = [];
  search: string = '';

  constructor(private localStorage: LocalstorageService){
    this.email = localStorage.get('usuario').email;
    this.clientes = localStorage.get(this.email).clientes;
  }
}
