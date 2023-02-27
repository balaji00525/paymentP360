import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { accountType } from '../interface';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbDate,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-makeapayment',
  templateUrl: './makeapayment.component.html',
  styleUrls: ['./makeapayment.component.scss'],
  providers: [DatePipe],
})
export class MakeapaymentComponent implements OnInit {
  private _model: NgbDate;
  data: any = {};
  SelectedAmount: number;
  literals: any = {};
  paymentMode: string;
  recipient: string;
  accountNo: number;
  mobile: string;
  amount: string;
  acountType: accountType[];
  enrolledAs: string;
  imagePath: string = environment.imagePath;
  Image: string = environment.Image;
  date = new Date();
  todayDate = this.datepipe.transform(new Date(), 'MMMM-dd-yy');

  isOpen = false;
  isOpenDateTime = false;
  minPickerDate = { year: 0, month: 0, day: 0 };

  constructor(
    private service: ApiService,
    private dataService: DataService,
    private router: Router,
    private datepipe: DatePipe,
    private calender: NgbCalendar
  ) {
    this.paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
  }

  paymentDetails(payMode) {
    switch (payMode) {
      case 'biller': {
        this.service
          .getBillerLiteralData()
          .subscribe((data) => (this.literals = data));
        break;
      }

      case 'sender': {
        this.service
          .getSenderLiteralData()
          .subscribe((data) => (this.literals = data));
        break;
      }
      case 'requester': {
        this.service
          .getRequesterLiteralData()
          .subscribe((data) => (this.literals = data));
      }
    }
  }

  ngOnInit(): void {
    this.selectToday();
    this.recipient = this.dataService.recipientName;
    this.accountNo = this.dataService.accountNumber;
    this.mobile = this.dataService.mobileNumber
      .toString()
      .replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    this.amount = '$' + this.dataService.payAmount;
    this.acountType = this.dataService.accType;
    this.enrolledAs = this.dataService.enroller;
    this.imagePath += this.dataService.imagePicture;
    this.Image += this.dataService.tick;
    this.minPickerDate = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };
  }

  onButtonClick(routerLink): void {
    this.router.navigate([routerLink]);
  }

  weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  };
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  selectedDay: string = '';
  selectedMonth: string = '';
  set model(val) {
    this._model = val;
    this.selectedDay = this.weekDays[this.calender.getWeekday(this.model)];
    this.selectedMonth = this.months[this.model.month - 1];
  }

  get model() {
    return this._model;
  }

  selectToday() {
    this.model = this.calender.getToday();
  }

  accountlist = '';
  accounts = [
    { accountType: 'Credit card(2.3% fee)', balance: '$365.27' },
    { accountType: 'main checking(*4738)', balance: '$5,164.98' },
  ];

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }
}
