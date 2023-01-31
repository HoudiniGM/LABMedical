import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-query-registration',
  templateUrl: './query-registration.component.html',
  styleUrls: ['./query-registration.component.css']
})
export class QueryRegistrationComponent {
  @ViewChild('inputPaciente') paciente!: ElementRef;
  pacienteSelecionado: {[key:string]: any} = this.localStorage.get('paciente');
  encontrado: boolean = false;
  form: FormGroup;


  constructor(private localStorage: LocalstorageService){
    this.form = new FormGroup({
      motivo: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
      dataConsulta: new FormControl('', Validators.required),
      horaConsulta: new FormControl('', Validators.required),
      descricao: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(1024)]),
      receita: new FormControl(''),
      precaucoes: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(256)])
    })
  }

  selecionarPaciente(){
    this.encontrado = false; // reseta a busca
    const email = this.localStorage.get('usuario').email; //pega o email de login
    let usuario = this.localStorage.get(email); // e procura pelo usuario por meio do email


    usuario.clientes.forEach((cadastro: {[key:string]:any}) => {
      if (this.paciente.nativeElement.value == cadastro['dados']['nome'] || this.paciente.nativeElement.value == cadastro['dados']['id']){
        //Se o input coincidir com o nome ou id de algum cadastro...
        this.localStorage.set('paciente', cadastro);
        //Esse paciente correspondente é salvo na chave 'paciente' para análise de dados...
        this.pacienteSelecionado = cadastro;
        //Defino uma variável para o paciente, para ser mostrado no template...
        this.encontrado = true;
      }
    })
    
    this.encontrado ? alert('Paciente encontrado!') : alert('Paciente não encontrado!')   
    }



  onSubmit(form: FormGroup){
    form.markAllAsTouched();

    if (form.valid){
      const email = this.localStorage.get('usuario').email; //pega o email de login
      let usuario = this.localStorage.get(email); // e procura pelo usuario por meio do email

      usuario.clientes.forEach( (cadastro: {[key:string]:any}, index: number) => { //percorro a lista de pacientes...
        if (cadastro['dados']['id'] == this.pacienteSelecionado['dados']['id']){ // Se algum paciente corresponder ao paciente selecionado...        
          
          usuario['clientes'][index]['consultas'] ? usuario['clientes'][index]['consultas'].push(form.value) : usuario['clientes'][index]['consultas'] = [form.value];
          // Eu dou um push do cadastro da consulta no array 'consulta' do pacienteAtalho
        }
      })
      this.localStorage.set(email, usuario); // Por fim, substituo os dados do localstorage pelos novos.
      form.reset();
    }
  }
}
