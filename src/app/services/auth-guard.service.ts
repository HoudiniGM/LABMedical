import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private localStorage: LocalstorageService, private router: Router) { }

  canActivate() {
    if (this.localStorage.get('usuario') == ''){
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
