import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TituloService } from 'src/app/services/titulo.service';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  form: FormGroup;

  constructor(private localStorage: LocalstorageService, private router: Router, private data: TituloService){
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    });
  }

  login(form: FormGroup){
    if (this.localStorage.get(form.value.email)){
      const email = this.localStorage.get(form.value.email);
      if (email.senha == form.value.senha){
        alert('Login efetuado!');
        this.router.navigateByUrl('/application/statistics');
        this.data.titulo = 'ESTATÍSTICAS';
        this.localStorage.set('usuario', {email: form.value.email, nome: this.localStorage.get(form.value.email).nome});
      } 
      else {
        alert('Senha inválida!');
      }
    } else {
      alert('E-mail não cadastrado!');
    }
  }
}
