import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { accountType } from '../interface';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { RoutingLinks } from '../routing';
import { billType } from '../interface';
import { BillType, Month, WeekDays } from '../common/constant';

@Component({
  selector: 'app-makeapayment',
  templateUrl: './makeapayment.component.html',
  styleUrls: ['./makeapayment.component.scss'],
  providers: [DatePipe],
})
export class MakeapaymentComponent implements OnInit {
  private _model: NgbDate;
  bill: billType;
 
  data: any = {};
  SelectedAmount: number;
  literals: any = {};
  paymentMode: string;
  recipient: string;
  mobile: string;
  amount: string;
  acountType: accountType[];
  paymentType: string;
  userLogo: string = environment.imagePath;
  accountDetails: DataService;
  route = RoutingLinks;


  todayDate = this.datepipe.transform(new Date(), 'MMMM-dd-yy');
  isOpen = false;
  isOpenDateTime = false;
  minPickerDate = { year: 0, month: 0, day: 0 };
  maxPickerDate: { year: number; month: number; day: number; };
  dueDate: string;

  constructor(
    private service: ApiService,
    private dataService: DataService,
    private datepipe: DatePipe,
    private calender: NgbCalendar,
    private router: Router,) {
    this.paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
  }

  ngOnInit(): void {
    this.selectToday();
    this.mobile = this.dataService.mobileNumber.toString().replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    this.amount = '$  ' + this.dataService.payAmount;
    this.dueDate=this.dataService.Date;
    this.userLogo += this.dataService.imagePicture;
    this.minPickerDate = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };  
    const futureDate=(new Date().setDate(new Date().getDate() + 90));
    this.maxPickerDate={
      year: new Date(futureDate).getFullYear(),
      month: new Date(futureDate).getMonth() + 1,
      day: new Date(futureDate).getDate(),
    };
    this.accountDetails = this.dataService;
  }

  paymentDetails(payMode):void {
    switch (payMode) {
      case BillType.BILLER: {
        this.service.getBillerLiteralData().subscribe((data) => (this.literals = data));
        break;
      }
      case  BillType.SENDER: {
        this.service.getSenderLiteralData().subscribe((data) => (this.literals = data));
        break;
      }
      case BillType.REQUESTOR: {
        this.service.getRequestorLiteralData().subscribe((data) => (this.literals = data));
      }
    }
  }
  
  onSubmit(routerLink): void {
    this.router.navigate([routerLink]);
  }
 
  selectedDay: string = '';
  selectedMonth: string = '';
  set model(val) {
    this._model = val;
    this.selectedDay = WeekDays[this.calender.getWeekday(this.model)];
    this.selectedMonth = Month[this.model.month];
  }

  get model() {
    return this._model;
  }

  selectToday():void {
    this.model = this.calender.getToday();
  }
  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }
  accountlist = '';
  accounts = [
    { accountType: 'Credit card(2.3% fee)', balance: '$365.27' },
    { accountType: 'main checking(*4738)', balance: '$5,164.98' },
  ];
}
