import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { BillType } from '../common/constant';
import util from '../utilities/util';
import { billType } from '../interface';
import { RoutingLinks } from '../routing';

@Component({
  selector: 'app-amounttopay',
  templateUrl: './amounttopay.component.html',
  styleUrls: ['./amounttopay.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmounttopayComponent {
  bill: billType;
  myDate: any = new Date();
  amount: number;
  paymentMode: string;
  selectedPaymentMode: string;
  literals: any = {};
  imagePath="";
  image: string;
  imageLogo: string;
  route = RoutingLinks;

  constructor(
    private services: ApiService,
    private changeDetector: ChangeDetectorRef,
    private dataService: DataService,
    private datepipe: DatePipe,
    private router: Router ) {
    this.myDate = datepipe.transform(this.myDate, 'MMMM d');
    this.myDate=(this.myDate.split(" ") [0]) + ' ' + util.getDate(this.myDate.split(" ")[1]);
    this.paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
  }




   private paymentDetails(payMode):void {
    switch (payMode) {
      case BillType.BILLER: {
        this.services.getBillerData().subscribe((data: billType) => (this.bill = data));
        
        this.services.getBillerLiteralData().subscribe((data) => (this.literals = data));
        console.log(JSON.stringify(this.literals))
        break;
      }
      case BillType.SENDER: {
        this.services.getSenderData().subscribe((data: billType) => (this.bill = data));
        this.services.getSenderLiteralData().subscribe((data) => (this.literals = data));
        this.selectedPaymentMode = 'Pay';
        break;
      }
      case BillType.REQUESTOR: {
        this.services.getRequestorData().subscribe((data: billType) => (this.bill = data));
        this.services.getRequestorLiteralData().subscribe((data) => (this.literals = data));
        this.selectedPaymentMode = 'Request';
      }
      
    }
    
  }

  onSubmit(routeLink): void {
    this.dataService.recipientName = this.bill.recipient;
    this.dataService.accountNumber = this.bill.accountNo;
    this.dataService.mobileNumber = this.bill.mobile;
    this.dataService.payAmount = this.bill.amount;
    this.dataService.accType = this.bill.accountList;
    this.dataService.enroller = this.bill.enrolledAs;
    this.dataService.imagePicture = this.bill.imagePath;
    this.dataService.tick = this.bill.image;
    this.dataService.bank = this.bill.imageLogo;
    this.dataService.paymentMode = this.bill.paymentType;
    this.dataService.cardNumber = this.bill.cardNo;
    this.dataService.feeDetail = this.bill.fee;
    this.dataService.confirm = this.bill.confirmation;
    this.router.navigate([routeLink]);
  }

  

  getImage():string{  
    if (this.bill) {
      // console.log(environment,this.bill)
      this.imagePath = environment.imagePath + this.bill.imagePath;     
     }
    this.changeDetector.markForCheck();
    // console.log("imagePath",this.imagePath)
    return this.imagePath;
  }
}