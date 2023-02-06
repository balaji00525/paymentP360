import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otpscreen',
  templateUrl: './otpscreen.component.html',
  styleUrls: ['./otpscreen.component.scss']
})
export class OtpscreenComponent implements OnInit {

  billerdata:any
  senderdata:any
  requesterdata:any
  otpdata:any
  status:true

  constructor(private service:DataserviceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getBillerData().subscribe(data=>this.billerdata=data)
    this.service.getSenderData().subscribe(data=>this.senderdata=data)
    this.service.getRequesterData().subscribe(data=>this.requesterdata=data)
    this.service.getOtpData().subscribe(data=>this.otpdata=data)
  }

  onsubmit(){
    this.router.navigate(['/confirmation'])
    this.router.navigate(['/makeapayment'])
  }

  verify(){
    alert('Payment successfully')
  }
  

 
}


