import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { BillType } from '../../common/constant/constant';
import { RoutingLinks } from '../../screen-name';

@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.component.html',
  styleUrls: ['./otp-screen.component.scss']
})

export class OtpScreenComponent implements OnInit {

  mobile: string;
  paymentMode: string;
  literal: any = {};
  route = RoutingLinks;
  header: any = {};
  constructor(
    private service: ApiService,
    private dataService: DataService,
    private router: Router) {
    this.paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
  }

  ngOnInit(): void {
    this.mobile = this.dataService.mobile.toString().replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  private paymentDetails(payMode): void {
    switch (payMode) {
      case BillType.BILLER: {
        this.service.getBillerHeaderData().subscribe((data) => (this.header = data));
        this.service.getBillerLiteralData().subscribe((data) => (this.literal = data));
        break;
      }
      case BillType.SENDER: {
        this.service.getSenderHeaderData().subscribe((data) => (this.header = data));
        this.service.getSenderLiteralData().subscribe((data) => (this.literal = data));
        break;
      }
      case BillType.REQUESTOR: {
        this.service.getRequestorHeaderData().subscribe((data) => (this.header = data));
        this.service.getRequestorLiteralData().subscribe((data) => (this.literal = data));
      }
    }
  }

  onSubmit(routerLink): void {
    this.router.navigate([routerLink]);
  }
}