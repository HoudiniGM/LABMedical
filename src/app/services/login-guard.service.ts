import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private localStorage: LocalstorageService, private router: Router) { }

  canActivate() {
    if (this.localStorage.get('usuario') !== ''){
      return false;
    }
    return true;
  }
}
