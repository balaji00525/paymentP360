import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { ConnectionService } from '../service/connection.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-makeapayment',
  templateUrl: './makeapayment.component.html',
  styleUrls: ['./makeapayment.component.scss']
})
export class MakeapaymentComponent implements OnInit {



  data: any
  status = true
  constructor(private service: DataserviceService, private cService: ConnectionService, private router: Router) { }

  onsubmit() {
    this.router.navigate(['/otpscreen']);
  }


  accountlist = '';
  accounts = [
    { accountType: 'Credit card(2.3% fee)', balance: '$365.27' },
    { accountType: 'main checking(*4738)', balance: '$5,164.98' }
  ]
  ngOnInit(): void {
    let paymentMode = this.cService.user;
    switch (paymentMode) {
      case "biller": this.service.getBillerData().subscribe(data => this.data = data);
        break;
      case "sender": this.service.getSenderData().subscribe(data => this.data = data);
        break;
      case "requester": this.service.getRequesterData().subscribe(data => this.data = data)
    }

  }

  pay() {
    this.status = false
  }



}
