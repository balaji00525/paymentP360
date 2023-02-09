import { Component, OnInit } from '@angular/core';
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
  data:any={};
  amount:number
  myDate: any =new Date();
  constructor(private service:ApiService, private cService: DataService, private router: Router, private datepipe:DatePipe) {
    this.myDate = this.datepipe.transform(this.myDate, 'MMM d');
   }

  onsubmit() {
    this.router.navigate(['/makeapayment']);
  }
  ngOnInit(): void {
    let paymentMode = this.cService.user;
    switch (paymentMode) {
      case "biller": this.service.getBillerData().subscribe(data => this.data = data);
        break;
      case "sender": this.service.getSenderData().subscribe(data => this.data = data);
        break;
      case "requester": this.service.getRequesterData().subscribe(data => this.data = data);
    }
  }
}
