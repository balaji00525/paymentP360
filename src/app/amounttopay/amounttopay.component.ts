import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-amounttopay',
  templateUrl: './amounttopay.component.html',
  styleUrls: ['./amounttopay.component.scss'],
  providers: [DatePipe],
})
export class AmounttopayComponent implements OnInit, DoCheck {
  data: any = {};
  myDate: any = new Date();
  amount: number;
  paymentMode: string;
  selectedPaymentMode: string;
  literals: any = {};
  imagePath: string;

  constructor(
    private services: ApiService,
    private dService: DataService,
    private router: Router,
    private datepipe: DatePipe,
    private changeDetector: ChangeDetectorRef
  ) {
    this.getDate();
    this.paymentMode = this.dService.user;

    switch (this.paymentMode) {
      case 'biller': {
        this.services.getBillerData().subscribe((data) => (this.data = data));
        this.services
          .getBillerLiteralData()
          .subscribe((data) => (this.literals = data));
        break;
      }
      case 'sender': {
        this.services.getSenderData().subscribe((data) => (this.data = data));
        this.services
          .getSenderLiteralData()
          .subscribe((data) => (this.literals = data));
        this.selectedPaymentMode = 'Pay';

        break;
      }
      case 'requester': {
        this.services
          .getRequesterData()
          .subscribe((data) => (this.data = data));
        this.services
          .getRequesterLiteralData()
          .subscribe((data) => (this.literals = data));
        this.selectedPaymentMode = 'Request';
      }
    }

    console.log(this.data);
  }

  onButtonClick(routeLink) {
    this.dService.recipientName = this.data.recipient;
    this.dService.accountNumber = this.data.accountNo;
    this.dService.mobileNumber = this.data.mobile;
    this.dService.payAmount = this.data.amount;
    this.dService.accType = this.data.accountType;
    this.dService.enroller = this.data.enrolledAs;
    this.dService.imagePicture = this.data.imagePath;
    this.dService.paymentMode = this.data.paymentType;
    this.dService.cardNumber = this.data.cardNo;
    this.dService.feeDetail = this.data.fee;
    this.dService.confirm = this.data.confirmation;
    this.router.navigate([routeLink]);
  }
  ngOnInit(): void {}
  ngDoCheck() {
    if (this.data) {
      this.imagePath = environment.imagePath + this.data?.imagePath;
      this.changeDetector.detectChanges();
    }
  }

  getDate() {
    this.myDate = this.datepipe.transform(this.myDate, 'MMMM d');
    console.log(this.myDate);
    this.myDate =
      this.myDate === 2 || this.myDate === 22
        ? this.myDate + 'nd'
        : this.myDate === 3 || this.myDate === 23
        ? this.myDate + 'rd'
        : this.myDate == 21 || this.myDate == 1 || this.myDate == 31
        ? this.myDate + 'st'
        : this.myDate + 'th';
  }
}
