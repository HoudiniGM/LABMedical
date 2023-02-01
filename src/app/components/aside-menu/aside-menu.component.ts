import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from '@angular/router';
import { TituloService } from 'src/app/services/titulo.service';


@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent {
  hide: boolean = false;

  constructor(private localStorage: LocalstorageService, private router: Router, public data: TituloService){}

  deslogar(){
    this.router.navigateByUrl('');
    this.localStorage.set('usuario', '');
  }

  salvarTitulo(rota: string){
   this.data.titulo = rota;
  }
}
