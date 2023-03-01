import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ApiService } from '../service/api.service';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
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
  literals: any = {};
  accountDetails: DataService;
  imagePath: string = environment.imagePath;
  image: string = environment.imagePath;
  imageLogo: string = environment.imagePath;
  paymentMode: string;
  route = RoutingLinks;
  selectedPaymentMode: string;

  constructor(
    private service: ApiService,
    private dataService: DataService,
    private datepipe: DatePipe,
    private router: Router) {
    this.myDate = this.datepipe.transform(this.myDate, 'MMMM d');
    let paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
  }

  ngOnInit(): void {
    this.imagePath += this.dataService.imagePicture;
    this.image += this.dataService.tick;
    this.imageLogo += this.dataService.bank;
    this.accountDetails = this.dataService;
  }

  paymentDetails(payMode) {
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

  onSubmit(routeLink) {
    this.router.navigate([RouterLink])
  }


}
