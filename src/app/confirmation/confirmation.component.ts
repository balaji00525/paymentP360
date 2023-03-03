import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import util from '../utilities/util';
import { environment } from 'src/environments/environment';
import { BillType } from '../common/constant';
import { billType } from '../interface';
import { RoutingLinks } from '../routing';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [DatePipe],
})

export class ConfirmationComponent implements OnInit {
  bill: billType;
  myDate: any = new Date();
  data: any = {};
  literals: any = {};
  accountDetails: DataService;
  paymentMode: string;
  route = RoutingLinks;
  amount: string;
  mobile: string;
  userLogo: string = environment.imagePath;
  tickImage: string = environment.imagePath;
  bankLogo: string = environment.imagePath;
  dueDate: string;

  constructor(
    private services: ApiService,
    private dataService: DataService,
    private datepipe: DatePipe,
    private router: Router) {
<<<<<<< HEAD
    this.myDate = this.datepipe.transform(this.myDate, 'MMMM d');
    this.myDate = util.getDate(this.myDate);
    let paymentMode = this.dataService.user;
=======
    this.myDate = this.datepipe.transform(this.myDate, 'EEEE, MMM d, y');
    this.paymentMode = this.dataService.user;
>>>>>>> 6e37d79dd6a1d2473d27e8b828ccf26602b6642b
    this.paymentDetails(this.paymentMode);
  }

  ngOnInit(): void {
    this.mobile = this.dataService.mobileNumber.toString().replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    this.userLogo += this.dataService.imagePicture;
    this.amount = '$  ' + this.dataService.payAmount;
    this.tickImage += this.dataService.tick;
    this.bankLogo += this.dataService.bank;
    this.accountDetails = this.dataService;
    this.dueDate=this.dataService.Date;
  }

  private paymentDetails(payMode) {
    switch (payMode) {
      case BillType.BILLER: {
        this.services.getBillerLiteralData().subscribe((data) => this.literals = data);
        break;
      }
      case BillType.SENDER: {
        this.services.getSenderLiteralData().subscribe((data) => (this.literals = data));
        break;
      }
      case BillType.REQUESTOR: {
        this.services.getRequestorLiteralData().subscribe((data) => (this.literals = data));
      }
    }
  }

  onSubmit(routerLink): void {
    this.router.navigate([routerLink]);
  }
}