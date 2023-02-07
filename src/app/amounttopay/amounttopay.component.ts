import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { ConnectionService } from '../service/connection.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-amounttopay',
  templateUrl: './amounttopay.component.html',
  styleUrls: ['./amounttopay.component.scss']
})
export class AmounttopayComponent implements OnInit {
  data:any={};
  amount:number
  constructor(private service:DataserviceService, private cService: ConnectionService, private router: Router) { }

  onsubmit() {
    this.router.navigate(['/makeapayment']);
  }
  ngOnInit(): void {
    let paymentMode=this.cService.user;
    switch(paymentMode){
      case "biller":this.service.getBillerData().subscribe(data=>this.data=data);
      break;
      case "sender":this.service.getSenderData().subscribe(data=>this.data=data);
      break;
      case "requester":this.service.getRequesterData().subscribe(data=>this.data=data)
    }

 
  
  }}
