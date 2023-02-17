import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-amounttopay',
  templateUrl: './amounttopay.component.html',
  styleUrls: ['./amounttopay.component.scss'],
  providers: [DatePipe]
})
export class AmounttopayComponent implements OnInit {
  data: any = {};
  myDate: any = new Date();
  amount: number
  paymentMode: string;
  literals:any={};
  selectedPaymentMode:string;


  constructor(private services: ApiService,
    private dService: DataService,
    private router: Router,
    private datepipe: DatePipe) {
    this.myDate = this.datepipe.transform(this.myDate, 'MMMM d');

    this.paymentMode = this.dService.user;
    switch (this.paymentMode) {
      case "biller": {

        this.services.getBillerData().subscribe(data => this.data = data);
        this.services.getBillerLiteralData().subscribe(data=> this.literals=data);
        break;
      }
      case "sender": {

        this.services.getSenderData().subscribe(data => this.data = data);
        this.services.getSenderLiteralData().subscribe(data=>this.literals=data);
        this.selectedPaymentMode='Pay';

        break;
      }
      case "requester": {

        this.services.getRequesterData().subscribe(data => this.data = data);
        this.services.getRequesterLiteralData().subscribe(data=>this.literals=data);
        this.selectedPaymentMode='Request';
      }
    }

    console.log(this.data)
  }
  onsubmit() {
    this.router.navigate(['/makeapayment']);
    // this.router.navigate(['/home']);

  }
  ngOnInit(): void { }
}

