import {
  Component,
  OnInit,
  DoCheck,
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
import { RoutingPage } from '../routing';
@Component({
  selector: 'app-amounttopay',
  templateUrl: './amounttopay.component.html',
  styleUrls: ['./amounttopay.component.scss'],
  providers: [DatePipe],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmounttopayComponent {
  bill: billType;
  myDate: any = new Date();
  amount: number;
  paymentMode: string;
  selectedPaymentMode: string;
  literals: any = {};
  imagePath: string;
  image: string;

  constructor(
    private services: ApiService,
    private changeDetector: ChangeDetectorRef,
    private dataService: DataService,
    private datepipe: DatePipe,
    private router: Router
  ) {
    this.myDate = datepipe.transform(this.myDate, 'MMMM d');
    util.getDate(this.myDate);
    this.paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
    if (this.bill) {
      this.imagePath = environment.imagePath + this.bill.imagePath;
      this.image = environment.image + this.bill.image;
    }
  }

  paymentDetails(payMode) {
    switch (payMode) {
      case BillType.BILLER: {
        this.services
          .getBillerData()
          .subscribe((data: billType) => (this.bill = data));
        this.services
          .getBillerLiteralData()
          .subscribe((data) => (this.literals = data));
        break;
      }
      case BillType.SENDER: {
        this.services
          .getSenderData()
          .subscribe((data: billType) => (this.bill = data));
        this.services
          .getSenderLiteralData()
          .subscribe((data) => (this.literals = data));
        this.selectedPaymentMode = 'Pay';

        break;
      }
      case BillType.REQUESTOR: {
        this.services
          .getRequestorData()
          .subscribe((data: billType) => (this.bill = data));
        this.services
          .getRequestorLiteralData()
          .subscribe((data) => (this.literals = data));
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
    this.dataService.paymentMode = this.bill.paymentType;
    this.dataService.cardNumber = this.bill.cardNo;
    this.dataService.feeDetail = this.bill.fee;
    this.dataService.confirm = this.bill.confirmation;
    this.router.navigate([routeLink]);
  }

  ngDoCheck() {
    if (this.bill) {
      this.imagePath = environment.imagePath + this.bill.imagePath;
      this.image = environment.image + this.bill.image;
      this.changeDetector.detectChanges();
    }
  }
}
