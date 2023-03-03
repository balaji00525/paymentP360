import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { BillType } from '../common/constant';
import { RoutingLinks } from '../routing';

@Component({
  selector: 'app-otpscreen',
  templateUrl: './otpscreen.component.html',
  styleUrls: ['./otpscreen.component.scss']
})

export class OtpscreenComponent implements OnInit {

  mobile: number;
  paymentMode: string;
  literals: any = {};
  route = RoutingLinks;

  constructor(
    private service: ApiService,
    private dataService: DataService,
    private router: Router) {
    this.paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
  }

  ngOnInit(): void {
    this.mobile = this.dataService.mobileNumber;
  }

  private paymentDetails(payMode): void {
    switch (payMode) {
      case BillType.BILLER: {
        this.service.getBillerLiteralData().subscribe((data) => (this.literals = data));
        break;
      }
      case BillType.SENDER: {
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
}