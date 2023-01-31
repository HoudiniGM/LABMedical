import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const item: any = this.storage.getItem(key);
    return JSON.parse(item);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(){
    this.storage.clear();
  }
}