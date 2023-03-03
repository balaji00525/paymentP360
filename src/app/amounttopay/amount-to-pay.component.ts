import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { environment } from 'src/environments/environment';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { BillType, ButtonType } from '../common/constant';
import util from '../utilities/util';

import { billType } from '../interface';
import { RoutingLinks } from '../routing';

@Component({
  selector: 'app-amount-to-pay',
  templateUrl: './amount-to-pay.component.html',
  styleUrls: ['./amount-to-pay.component.scss'],
  providers: [DatePipe],
})
export class AmountToPayComponent {
  bill: billType;
  paymentMode: string;
  literals: any = {};
  imagePath = '';
  route = RoutingLinks;
  mobile: string;
  accountNo: string;
  paymentType = BillType;
  buttonType = ButtonType;
  myDate: string;
  constructor(
    private _changeDetector: ChangeDetectorRef,
    private _data: DataService,
    private _datepipe: DatePipe,
    private _router: Router,
    private _api: ApiService
  ) {
    this.paymentMode = this._data.user;
    this._paymentDetails(this.paymentMode);
  }

  private _paymentDetails(payMode): void {
    switch (payMode) {
      case BillType.BILLER: {
        this._api
          .getBillerData()
          .subscribe((data: billType) => (this.bill = data));
        this._api
          .getBillerLiteralData()
          .subscribe((data) => (this.literals = data));
        break;
      }
      case BillType.SENDER: {
        this._api
          .getSenderData()
          .subscribe((data: billType) => (this.bill = data));
        this._api
          .getSenderLiteralData()
          .subscribe((data) => (this.literals = data));
        break;
      }
      case BillType.REQUESTOR: {
        this._api
          .getRequestorData()
          .subscribe((data: billType) => (this.bill = data));
        this._api
          .getRequestorLiteralData()
          .subscribe((data) => (this.literals = data));
      }
    }
  }

  public onSubmit(routeLink): void {
    this._data.recipientName = this.bill.recipient;
    this._data.accountNumber = this.bill.accountNo;
    this._data.mobileNumber = this.bill.mobile;
    this._data.payAmount = this.bill.amount;
    this._data.accType = this.bill.accountList;
    this._data.enroller = this.bill.enrolledAs;
    this._data.imagePicture = this.bill.userLogo;
    this._data.tick = this.bill.tickImage;
    this._data.bank = this.bill.bankLogo;
    this._data.paymentMode = this.bill.paymentType;
    this._data.cardNumber = this.bill.cardNo;
    this._data.feeDetail = this.bill.fee;
    this._data.confirm = this.bill.confirmation;
    this._data.date = this.bill.dueDate;
    this._router.navigate([routeLink]);
  }

  public getImage(): string {
    if (this.bill) {
      this.imagePath = environment.imagePath + this.bill.userLogo;
    }
    this._changeDetector.markForCheck();
    return this.imagePath;
  }
  public getMobile(): string {
    return this.bill?.mobile
      .toString()
      .replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }
  public getAccountNo(): string {
    return '*' + this.bill?.accountNo;
  }
}
