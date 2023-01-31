import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from '@angular/router';
import { TituloService } from 'src/app/services/titulo.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  usuario: string = '';

  constructor(private localStorage: LocalstorageService, private router: Router, public data: TituloService){ }

  ngOnInit(): void {
    if (this.localStorage.get('usuario') == ''){
      this.router.navigateByUrl('');
    } else {
      this.usuario = this.localStorage.get('usuario').nome;
    }

  }
}

