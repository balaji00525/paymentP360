import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { accountType } from '../interface';
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
  acountType:accountType[];
  enrolledAs:string;
  data:any={};

  constructor(private service:ApiService,
    private router:Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.recipient= this.dataService.recipientName;
    this.accountNo=this.dataService.accountNumber;
    this.mobile=this.dataService.mobileNumber;
    this.amount=this.dataService.payAmount;
    this.acountType=this.dataService.accType;
    this.enrolledAs=this.dataService.enroller;
     }
     onButtonClick(routerLink): void {
      this.router.navigate([routerLink]);
    }
 
}


