import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-otpscreen',
  templateUrl: './otpscreen.component.html',
  styleUrls: ['./otpscreen.component.scss']
})
export class OtpscreenComponent implements OnInit {

 
  data:any={};

  constructor(private service:ApiService,private router:Router,private cService: DataService) { 
    let paymentMode = this.cService.user;
    switch (paymentMode) {
      case "biller": this.service.getBillerData().subscribe(data => this.data = data);
        break;
      case "sender": this.service.getSenderData().subscribe(data => this.data = data);
        break;
      case "requester": this.service.getRequesterData().subscribe(data => this.data = data)
    }
  }


  ngOnInit(): void {
    
     }


 


  onsubmit(){
    this.router.navigate(['/confirmation'])
    this.router.navigate(['/home'])
  }

  verify(){
    alert('Payment successfully')
  }
  

 
}


