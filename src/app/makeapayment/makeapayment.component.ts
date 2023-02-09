import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-makeapayment',
  templateUrl: './makeapayment.component.html',
  styleUrls: ['./makeapayment.component.scss']
})
export class MakeapaymentComponent implements OnInit {

  data:any={};

  constructor(private service: ApiService, 
    private dService: DataService,
     private router: Router) { 
      let paymentMode = this.dService.user;
    switch (paymentMode) {
      case "biller": this.service.getBillerData().subscribe(data => this.data = data);
        break;
      case "sender": this.service.getSenderData().subscribe(data => this.data = data);
        break;
      case "requester": this.service.getRequesterData().subscribe(data => this.data = data)
    }
     }

  onsubmit() {
    this.router.navigate(['/otpscreen']);
  }
  accountlist = '';
  accounts = [
    { accountType: 'Credit card(2.3% fee)', balance: '$365.27' },
    { accountType: 'main checking(*4738)', balance: '$5,164.98' }
  ]
  ngOnInit(): void {
    

  }



  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
