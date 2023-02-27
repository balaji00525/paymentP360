import { Injectable } from '@angular/core';
import { accountType } from '../interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private header: string;
  private recipient:string;
  private accountNo:number;
  private mobile:number;
  private amount:number;
  private accountType:accountType[];
  private enrolledAs:string;
  private imagePath:string;
  private paymentType:string;
  private cardNo:number;
  private fee:string;
  private confirmation:number;
  private image:string;
  accountList: any;
  constructor() { }

  get user():string{
    return this.header;
  }
  set user(val: string){
    this.header = val;
  }
  get imagePicture():string{
    return this.imagePath;
  }
  set imagePicture(val:string){
    this.imagePath=val;
  }
  get recipientName():string{
    return this.recipient;
  }
  set recipientName(val: string){
    this.recipient=val;
  }
  get accountNumber():number{
    return this.accountNo;
  }
  set accountNumber(val:number){
    this.accountNo=val;
  }
  get mobileNumber():number{
    return this.mobile;
  }
  set mobileNumber(val:number){
    this.mobile=val;
  }
  get payAmount():number{
    return this.amount;
  }
  set payAmount(val:number){
    this.amount=val;
  }
  get accType():accountType[]{
    return this.accountType;
  }
  set accType(val:accountType[]){
    this.accountType=val;
  }
  get enroller():string{
    return this.enrolledAs;
  }
  set enroller(val:string){
    this.enrolledAs=val;
  }
  get paymentMode():string{
    return this.paymentType;
  }
  set paymentMode(val:string){
    this.paymentType=val;
  }
  get cardNumber():number{
    return this.cardNo;
  }
  set cardNumber(val:number){
    this.cardNo=val;
  }
  get feeDetail():string{
    return this.fee;
  }
  set feeDetail(val:string){
    this.fee=val;
  }
  get confirm():number{
    return this.confirmation;
  }
  set confirm(val:number){
    this.confirmation=val;
  }
  get tick():string{
    return this.image;
  }
  set tick( val:string){
    this.image=val;
  }
}