import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../service/api.service';
import { BillType, Month, WeekDays } from '../../common/constant/constant';
import { DataService } from '../../service/data.service';
import { environment } from 'src/environments/environment';

import { IAccountType } from '../../common/interface/interface';
import { RoutingLinks } from '../../screen-name';


@Component({
  selector: 'app-make-a-payment',
  templateUrl: './make-a-payment.component.html',
  styleUrls: ['./make-a-payment.component.scss'],
  providers: [DatePipe],
})
export class MakeAPaymentComponent implements OnInit {
  accountDetails: DataService;
  acountType: IAccountType[];
  amount: string;
  data: any = {};
  dueDate: string;
  header: any={};
  isOpen = false;
  isOpenDateTime = false;
  literal: any = {};
  maxPickerDate: { year: number; month: number; day: number; };
  minPickerDate = { year: 0, month: 0, day: 0 };
  mobile: string;
  paymentMode: string;
  paymentType: string;
  private _model: NgbDate;
  recipient: string;
  route = RoutingLinks;
  SelectedAmount: number;
  todayDate = this._datepipe.transform(new Date(), 'MMMM-dd-yy');
  userLogo: string = environment.imagePath;
  zelleImage: string = environment.imagePath;
  
  constructor(
    private _data: DataService,
    private _datepipe: DatePipe,
    private _calender: NgbCalendar,
    private _router: Router,
    private _api: ApiService
    ) {
    this.paymentMode = this._data.user;
    this._paymentDetails(this.paymentMode);
  }

  ngOnInit(): void {
    this.selectToday();
    this.accountDetails = this._data;
    this.amount = '$  ' + this._data.amount;
    this.dueDate=this._data.dueDate;
    const futureDate=(new Date().setDate(new Date().getDate() + 90));
    this.maxPickerDate =
    {
      year: new Date(futureDate).getFullYear(),
      month: new Date(futureDate).getMonth() + 1,
      day: new Date(futureDate).getDate(),
    };
    this.minPickerDate = 
    {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };  
    this.mobile = this._data.mobile.toString().replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    this.userLogo += this._data.userLogo;
    this.zelleImage += this._data.zelleImage;  
  }

  private _paymentDetails(payMode):void {
    switch (payMode) {
      case BillType.BILLER: {
        this._api.getBillerHeaderData().subscribe((data)=>(this.header=data));
        this._api.getBillerLiteralData().subscribe((data)=>(this.literal=data));
        break;
      }
      case  BillType.SENDER: {
        this._api.getSenderHeaderData().subscribe((data)=>(this.header=data));
        this._api.getSenderLiteralData().subscribe((data) => (this.literal = data));
        break;
      }
      case BillType.REQUESTOR: {
        this._api.getRequestorHeaderData().subscribe((data)=>(this.header=data));
        this._api.getRequestorLiteralData().subscribe((data) => (this.literal = data));
      }
    }
  }
  
  public onSubmit(routerLink): void {
    this._router.navigate([routerLink]);
  }
 
  selectedDay: string = '';
  selectedMonth: string = '';
  set model(val) {
    this._model = val;
    this.selectedDay = WeekDays[this._calender.getWeekday(this.model)];
    this.selectedMonth = Month[this.model.month];
  }

  public get model() {
    return this._model;
  }

  public selectToday():void {
    this.model = this._calender.getToday();
  }
  displayStyle = 'none';

  public openPopup() {
    this.displayStyle = 'block';
  }

  public closePopup() {
    this.displayStyle = 'none';
  }
  accountlist = '';
  accounts = [
    { accountType: 'Credit card(2.3% fee)', balance: '$365.27' },
    { accountType: 'main checking(*4738)', balance: '$5,164.98' },
  ];
}
