//all screen sholud be under screenfloder////done
//interface pipe sholud be under common folder////done
//routing .ts  sholud be renamed to screen-names.ts///done
//create folder constants//done

import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../service/api.service';
import { BillType, ButtonType } from '../common/constant';
import { DataService } from '../service/data.service';
import { environment } from 'src/environments/environment';

import { IBillType } from '../interface';
import { RoutingLinks } from '../routing';
import Utils from '../utilities/util';

@Component({
  selector: 'app-amount-to-pay',
  templateUrl: './amount-to-pay.component.html',
  styleUrls: ['./amount-to-pay.component.scss'],
})
export class AmountToPayComponent {
  accountNo: string;
  bill: IBillType;
  buttonType = ButtonType;
  imagePath = '';
  literals: any = {};
  paymentMode: string;
  paymentType = BillType;
  route = RoutingLinks;
  amount: string;
  util:Utils;
  constructor(
    private _api: ApiService,
    private _changeDetector: ChangeDetectorRef,
    private _data: DataService,
    private _router: Router,
  ) {
    this.paymentMode = this._data.user;
    this._paymentDetails(this.paymentMode);
    this.util=Utils;
  }

  private _paymentDetails(payMode): void {
    switch (payMode) {
      case BillType.BILLER: {
        this._api
          .getBillerData()
          .subscribe((data: IBillType) => (this.bill = data));
        this._api
          .getBillerLiteralData()
          .subscribe((data) => (this.literals = data));
        break;
      }
      case BillType.SENDER: {
        this._api
          .getSenderData()
          .subscribe((data: IBillType) => (this.bill = data));
        this._api
          .getSenderLiteralData()
          .subscribe((data) => (this.literals = data));
        break;
      }
      case BillType.REQUESTOR: {
        this._api
          .getRequestorData()
          .subscribe((data: IBillType) => (this.bill = data));
        this._api
          .getRequestorLiteralData()
          .subscribe((data) => (this.literals = data));
      }
    }
  }

  public onSubmit(routeLink): void {
    this._data.recipient = this.bill.recipient;
    this._data.accountNo = this.bill.accountNo;//name should be same
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

  public getMobile(): string { //move this to util
   return Utils.getMobile(this.bill?.mobile);
  }

 
}
