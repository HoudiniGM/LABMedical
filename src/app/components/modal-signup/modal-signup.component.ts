import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-signup',
  templateUrl: './modal-signup.component.html',
  styleUrls: ['./modal-signup.component.css']
})
export class ModalSignupComponent {
  form: FormGroup;

  constructor(private localStorage: LocalstorageService){
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(9)]),
      confirmSenha: new FormControl('')
    });
  }
  
  
  submit(form: FormGroup){
    if (form.value.senha !== form.value.confirmSenha){
      alert('Senhas não conferem!');
    } else if (this.localStorage.get(form.value.email)) {
      alert(`Já existe um cadastro com o email ${form.value.email}`)
    } else {
      this.localStorage.set(
        form.value.email, {
          senha: form.value.senha, 
          nome: form.value.nome, 
          clientes: []
        });
      alert('Conta criado com sucesso!');
    }
  }
}