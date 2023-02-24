import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-otpscreen',
  templateUrl: './otpscreen.component.html',
  styleUrls: ['./otpscreen.component.scss']
})
export class OtpscreenComponent implements OnInit {

  recipient:string;
  accountNo:number;
  mobile:number;
  amount:number;
  acountType:string;
  enrolledAs:string;
  data:any={};

  constructor(private service:ApiService,private router:Router,private dService: DataService) { 
    let paymentMode = this.dService.user;
    switch (paymentMode) {
      case "biller":
        //  this.service.getBillerData().subscribe(data => this.data = data);
        break;
      case "sender": 
      // this.service.getSenderData().subscribe(data => this.data = data);
        break;
      case "requester": 
      // this.service.getRequesterData().subscribe(data => this.data = data)
    }
  }


  ngOnInit(): void {
    this.recipient= this.dService.recipientName;
    this.accountNo=this.dService.accountNumber;
    this.mobile=this.dService.mobileNumber;
    this.amount=this.dService.payAmount;
    this.acountType=this.dService.accType;
    this.enrolledAs=this.dService.enroller;
     }


 


     onButtonClick(routerLink): void {
      this.router.navigate([routerLink]);
    }
 
}


