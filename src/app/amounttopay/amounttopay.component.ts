import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { BillType } from '../common/constant'; 
import   util from '../utilities/util';
import {billType} from '../interface'
@Component({
  selector: 'app-amounttopay',
  templateUrl: './amounttopay.component.html',
  styleUrls: ['./amounttopay.component.scss'],
  providers: [DatePipe],
})
export class AmounttopayComponent implements DoCheck {
  bill: any ;
  myDate: any = new Date();
  amount: number;
  paymentMode: string;
  selectedPaymentMode: string;
  literals: any = {};
  imagePath: string;
  Image: string;


  constructor(
    private services: ApiService,
    private dataService: DataService,
    private router: Router,
    private datepipe: DatePipe,
    private changeDetector: ChangeDetectorRef
  ) {
    this.myDate = datepipe.transform(this.myDate, 'MMMM d');
    util.getDate(this.myDate);
    this.paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
  }

 paymentDetails(payMode){
  switch (payMode) {
    case  BillType.BILLER: {
      this.services.getBillerData().subscribe((data) => (this.bill = data));
      this.services
        .getBillerLiteralData()
        .subscribe((data) => (this.literals = data));
      break;
    }
    case BillType.SENDER: {
      this.services.getSenderData().subscribe((data) => (this.bill = data));
      this.services
        .getSenderLiteralData()
        .subscribe((data) => (this.literals = data));
      this.selectedPaymentMode = 'Pay';

      break;
    }
    case BillType.REQUESTOR: {
      this.services
        .getRequestorData()
        .subscribe((data) => (this.bill = data));
      this.services
        .getRequestorLiteralData()
        .subscribe((data) => (this.literals = data));
      this.selectedPaymentMode = 'Request';
    }
  }
 }

  onSubmit(routeLink):void {
    this.dataService.recipientName = this.bill.recipient;
    this.dataService.accountNumber = this.bill.accountNo;
    this.dataService.mobileNumber = this.bill.mobile;
    this.dataService.payAmount = this.bill.amount;
    this.dataService.accType = this.bill.accountList;
    this.dataService.enroller = this.bill.enrolledAs;
    this.dataService.imagePicture = this.bill.imagePath;
    this.dataService.tick=this.bill.Image;
    this.dataService.paymentMode = this.bill.paymentType;
    this.dataService.cardNumber = this.bill.cardNo;
    this.dataService.feeDetail = this.bill.fee;
    this.dataService.confirm = this.bill.confirmation;
    this.router.navigate([routeLink]);
  }
 
  ngDoCheck() {
    if (this.bill) {
      this.imagePath = environment.imagePath + this.bill.imagePath;
      this.changeDetector.detectChanges();
    }
    if (this.bill){
      this.Image = environment.Image+this.bill.Image;
      this.changeDetector.detectChanges();
    }
  }

  
}
