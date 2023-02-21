import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private header: string;
  private recipient:string;
  private cardNumber:number;
  private contactNumber:number;
  private dueAmount:number;
  private dueDate:Date;
  constructor() { }

  get user():string{
    return this.header;
  }
  set user(val: string){
    this.header = val;
  }
  get recipientName():string{
    return this.recipient;
  }
  set recipientName(val: string){
    this.recipient=val;
  }
  get cardNo():number{
    return this.cardNumber;
  }
  set cardNo(val:number){
    this.cardNumber=val;
  }
  get contactNo():number{
    return this.contactNumber;
  }
  set contactNo(val:number){
    this.contactNumber=val;
  }
  
}
