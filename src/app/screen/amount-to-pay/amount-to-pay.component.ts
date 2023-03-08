//all screen sholud be under screenfloder////done
//interface pipe sholud be under common folder////done
//routing .ts  sholud be renamed to screen-names.ts///done
//create folder constants//done

import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../service/api.service';
import { BillType, ButtonType } from '../../common/constant/constant';
import { DataService } from '../../service/data.service';
import { environment } from 'src/environments/environment';

import { IBillType } from '../../common/interface/interface';
import { RoutingLinks } from '../../screen-name';
import Utils from 'src/assets/utilities/util';

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
  header:any={};
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
        this._api.getBillerHeaderData()
          .subscribe((data)=>(this.header =data));
        break;
      }
      case BillType.SENDER: {
        this._api
          .getSenderData()
          .subscribe((data: IBillType) => (this.bill = data));
        this._api
          .getSenderLiteralData()
          .subscribe((data) => (this.literals = data));
        this._api.getSenderHeaderData()
          .subscribe((data)=>(this.header =data));
        break;
      }
      case BillType.REQUESTOR: {
        this._api
          .getRequestorData()
          .subscribe((data: IBillType) => (this.bill = data));
        this._api
          .getRequestorLiteralData()
          .subscribe((data) => (this.literals = data));
        this._api.getRequestorHeaderData()
          .subscribe((data)=>(this.header =data));
      }
    }
  }

  public onSubmit(routeLink): void {
    this._data.recipient = this.bill.recipient;
    this._data.accountNo = this.bill.accountNo;//name should be same/////done
    this._data.mobile = this.bill.mobile;
    this._data.amount = this.bill.amount;
    this._data.accountList = this.bill.accountList;
    this._data.enrolledAs = this.bill.enrolledAs;
    this._data.userLogo = this.bill.userLogo;
    this._data.tickImage = this.bill.tickImage;
    this._data.bankLogo = this.bill.bankLogo;
    this._data.paymentType = this.bill.paymentType;
    this._data.cardNo = this.bill.cardNo;
    this._data.fee = this.bill.fee;
    this._data.confirmation = this.bill.confirmation;
    this._data.dueDate = this.bill.dueDate;
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
   return Utils.getMobile(this.bill?.mobile);
  }

 
}
