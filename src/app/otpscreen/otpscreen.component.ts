import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { Router } from '@angular/router';
import { ConnectionService } from '../service/connection.service';
@Component({
  selector: 'app-otpscreen',
  templateUrl: './otpscreen.component.html',
  styleUrls: ['./otpscreen.component.scss']
})
export class OtpscreenComponent implements OnInit {

 
  data:any={};

  constructor(private service:DataserviceService,private router:Router,private cService: ConnectionService) { }


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


  onsubmit(){
    this.router.navigate(['/confirmation'])
    this.router.navigate(['/makeapayment'])
  }

  verify(){
    alert('Payment successfully')
  }
  

 
}


