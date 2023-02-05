import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pacient-registration',
  templateUrl: './pacient-registration.component.html',
  styleUrls: ['./pacient-registration.component.css']
})
export class PacientRegistrationComponent {
  form: FormGroup;
  today: Date = new Date();
  endereco: any = {
    localidade: '',
    uf: '',
    complemento: '',
    bairro: '',
    numero: '',
    logradouro: ''
  }

  constructor(private localStorage: LocalstorageService, private http: HttpClient){
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
      gênero: new FormControl('', Validators.required),
      nascimento: new FormControl('', Validators.required),
      CPF: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
      RG: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      estadoCivil: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      naturalidade: new FormControl('', [Validators.required, Validators.maxLength(64), Validators.minLength(8)]),
      emergência: new FormControl('', Validators.required),
      alergias: new FormControl(''),
      cuidados: new FormControl(''),
      convênio: new FormControl(''),
      carteira: new FormControl(''),
      validade: new FormControl(''),
      CEP: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      estado: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]),
      logradouro: new FormControl('', Validators.required),
      número: new FormControl('', Validators.required),
      complemento: new FormControl(''),
      bairro: new FormControl('', Validators.required),
      referência: new FormControl('', Validators.required)
    })
  }

 

  onSubmit(form: FormGroup){
    form.markAllAsTouched();

    if (form.valid){
      form.value.id = Math.floor(Date.now() * Math.random()).toString().substring(0, 8); // gera um id aleatório

      const email = this.localStorage.get('usuario').email; //pega o email de login
      let usuario = this.localStorage.get(email); // e procura pelo usuario por meio do email
      
      usuario.clientes.push({dados: form.value})  // adiciono o novo cliente
      this.localStorage.set(email, usuario)   // substituo os dados antigos pelos novos

      form.reset();
      alert('Registro criado!')
    }
  }

  buscarCEP(cep: any){
    cep.value = cep.value.replace(/\D/g, '');
    if (cep.value.length === 8){
      this.http.get(`https://viacep.com.br/ws/${cep.value}/json/`).subscribe( data => {
        this.endereco = data
      })
    }
  }
}
