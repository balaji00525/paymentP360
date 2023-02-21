import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-makeapayment',
  templateUrl: './makeapayment.component.html',
  styleUrls: ['./makeapayment.component.scss'],
  providers: [DatePipe]
})


export class MakeapaymentComponent implements OnInit {
  data: any = {};
  amount: any;
 
  SelectedAmount: number;
  literals: any = {};

  recipient:string;
  cardNumber:number;
  userForm:FormGroup;
  paymentList=[];

  todayDate=this.datepipe.transform(new Date(), 'yyyy-MM-dd');
 
  isOpen=false

  constructor(private service: ApiService,
    private dService: DataService,
    private router: Router,
    private fb:FormBuilder,
    private datepipe: DatePipe) {
     
      
    let paymentMode = this.dService.user;

    switch (paymentMode) {
      case "biller": {
        this.service.getBillerData().subscribe(data => this.data = data);
        this.service.getBillerLiteralData().subscribe(data => this.literals = data);
        break;
      }

      case "sender": {
        this.service.getSenderData().subscribe(data => this.data = data);
        this.service.getSenderLiteralData().subscribe(data => this.literals = data);
        break;
      }
      case "requester": {

        this.service.getRequesterData().subscribe(data => this.data = data);
        this.service.getRequesterLiteralData().subscribe(data => this.literals = data);
      }
    }
  }


  ngOnInit(): void {
    this.userForm=this.fb.group({
    inputamount: '',
    dateValidity: ''
    });
    this.recipient= this.dService.recipientName;
      this.cardNumber=this.dService.cardNo;
  }


  onsubmit() {
    this.router.navigate(['/otpscreen']);
    this.router.navigate(['/amounttopay']);

  }
  onFormSubmit(){
    console.log(this.userForm.value);
    this.service.createBillerData(this.userForm.value).subscribe({
      next:(Response)=>{
        // console.log("Added to the Payment List")
        console.log(this.paymentList)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  

 


  accountlist = '';
  accounts = [
    { accountType: 'Credit card(2.3% fee)', balance: '$365.27' },
    { accountType: 'main checking(*4738)', balance: '$5,164.98' }
  ]


  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}
