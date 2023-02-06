import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private header: string;
  constructor() { }

  get user():string{
    return this.header;
  }
  set user(val: string){
    this.header = val;
  }

}

