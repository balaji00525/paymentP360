import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-makeapayment',
  templateUrl: './makeapayment.component.html',
  styleUrls: ['./makeapayment.component.scss'],
  providers: [DatePipe]
})


export class MakeapaymentComponent implements OnInit {

  data: any = {};
  SelectedAmount: number;
  literals: any = {};
 
  paymentMode: string;
  recipient:string;
  accountNo:number;
  mobile:string;
  amount:number;
  acountType:string;
  enrolledAs:string;
  imagePath:string=environment.imagePath;
  date=new Date();
  todayDate=this.datepipe.transform(new Date(), 'MMMM-dd-yy');
 
  isOpen=false

  constructor(private service: ApiService,
    private dService: DataService,
    private router: Router,
    private datepipe: DatePipe) {
          
    let paymentMode = this.dService.user;

    switch (paymentMode) {
      case "biller": {
        // this.service.getBillerData().subscribe(data => this.data = data);
        this.service.getBillerLiteralData().subscribe(data => this.literals = data);
        break;
      }

      case "sender": {
        // this.service.getSenderData().subscribe(data => this.data = data);
        this.service.getSenderLiteralData().subscribe(data => this.literals = data);
        
        break;
      }
      case "requester": {

        // this.service.getRequesterData().subscribe(data => this.data = data);
        this.service.getRequesterLiteralData().subscribe(data => this.literals = data);
        
      }
    }
  }

  ngOnInit(): void {
    this.recipient= this.dService.recipientName;
    this.accountNo=this.dService.accountNumber;
    this.mobile=this.dService.mobileNumber.toString().replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    this.amount=this.dService.payAmount;
    this.acountType=this.dService.accType;
    this.enrolledAs=this.dService.enroller;
    this.imagePath+=this.dService.imagePicture;
  }

  onButtonClick(routerLink): void {
    this.router.navigate([routerLink]);
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