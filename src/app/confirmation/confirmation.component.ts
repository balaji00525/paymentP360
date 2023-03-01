import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import util from '../utilities/util';
import { environment } from 'src/environments/environment';
import { billType } from '../interface';
import { BillType } from '../common/constant';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [DatePipe],
})
export class ConfirmationComponent implements OnInit {
  data: any = {};
  bill: billType;
  myDate: any = new Date();
  literals: any = {};
  accountDetails: DataService;
  imagePath: string = environment.imagePath;
  image: string = environment.image;
  paymentMode: string;
  selectedPaymentMode: string;

  constructor(
    private service: ApiService,
    private dataService: DataService,
    private router: Router,
    private datepipe: DatePipe
  ) {
    this.myDate = this.datepipe.transform(this.myDate, 'MMMM d');
    this.myDate = util.getDate(this.myDate);
    let paymentMode = this.dataService.user;
    this.paymentDetails(this.paymentMode);
  }

  
  paymentDetails(payMode) {
    switch (payMode) {
      case BillType.BILLER: {
        
        this.service
          .getBillerLiteralData()
          .subscribe((data) => (this.literals = data));
        break;
      }
      case BillType.SENDER: {
        
        this.service
          .getSenderLiteralData()
          .subscribe((data) => (this.literals = data));
        this.selectedPaymentMode = 'Pay';

        break;
      }
      case BillType.REQUESTOR: {
        
        this.service
          .getRequestorLiteralData()
          .subscribe((data) => (this.literals = data));
        this.selectedPaymentMode = 'Request';
      }
    }
  }

  onsubmit() {
    this.router.navigate(['/home']);
    this.router.navigate(['/otpscreen']);
  }

  ngOnInit(): void {
    this.imagePath += this.dataService.imagePicture;
    this.image += this.dataService.tick;
    this.accountDetails = this.dataService;
  }
}
