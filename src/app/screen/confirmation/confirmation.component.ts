import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { DataService } from '../../service/data.service';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { BillType } from '../../common/constant/constant';
import { RoutingLinks } from '../../screen-name';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [DatePipe],
})

export class ConfirmationComponent implements OnInit {

  myDate: any = new Date();
  data: any = {};
  literal: any = {};
  header:any={};
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
    this.myDate = this.datepipe.transform(this.myDate, 'EEEE, MMM d, y');
    this.paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
  }

  ngOnInit(): void {
    this.mobile = this.dataService.mobile.toString().replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    this.userLogo += this.dataService.userLogo;
    this.amount = '$  ' + this.dataService.amount;
    this.tickImage += this.dataService.tickImage;
    this.bankLogo += this.dataService.bankLogo;
    this.accountDetails = this.dataService;
    this.dueDate=this.dataService.dueDate;
  }

  private paymentDetails(payMode) {
    switch (payMode) {
      case BillType.BILLER: {
        this.services.getBillerHeaderData().subscribe((data)=>(this.header=data));
        this.services.getBillerLiteralData().subscribe((data) => this.literal = data);
        break;
      }
      case BillType.SENDER: {
        this.services.getRequestorHeaderData().subscribe((data)=>(this.header=data));
        this.services.getSenderLiteralData().subscribe((data) => (this.literal = data));
        break;
      }
      case BillType.REQUESTOR: {
        this.services.getRequestorHeaderData().subscribe((data)=>(this.header=data));
        this.services.getRequestorLiteralData().subscribe((data) => (this.literal = data));
      }
    }
  }

  onSubmit(routerLink): void {
    this.router.navigate([routerLink]);
  }
}