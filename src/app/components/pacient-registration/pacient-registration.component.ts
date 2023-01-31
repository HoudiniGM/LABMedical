import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-pacient-registration',
  templateUrl: './pacient-registration.component.html',
  styleUrls: ['./pacient-registration.component.css']
})
export class PacientRegistrationComponent {
  form: FormGroup;

  constructor(private localStorage: LocalstorageService){
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
      genero: new FormControl('', Validators.required),
      nascimento: new FormControl('', Validators.required),
      cpf: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
      rg: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      estadoCivil: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      naturalidade: new FormControl('', [Validators.required, Validators.maxLength(64), Validators.minLength(8)]),
      numEmergencia: new FormControl('', Validators.required),
      alergias: new FormControl(''),
      cuidados: new FormControl(''),
      convenio: new FormControl(''),
      numCarteira: new FormControl(''),
      validade: new FormControl(''),
      cep: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      estado: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]),
      logradouro: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl(''),
      bairro: new FormControl('', Validators.required),
      referencia: new FormControl('', Validators.required)
    })
  }

 

  onSubmit(form: FormGroup){
    form.markAllAsTouched();

    if (form.valid){
      form.value.id = Math.floor(Date.now() * Math.random()).toString(36); // gera um id aleatório

      const email = this.localStorage.get('usuario').email; //pega o email de login
      let usuario = this.localStorage.get(email); // e procura pelo usuario por meio do email
      
      usuario.clientes.push({dados: form.value})  // adiciono o novo cliente
      this.localStorage.set(email, usuario)   // substituo os dados antigos pelos novos

      form.reset();
    }
  }
}
