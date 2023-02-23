import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [DatePipe]
})
export class ConfirmationComponent implements OnInit {
  data: any={};
  myDate: any = new Date();
  literals:any={};
  accountDetails: DataService;


  constructor(private service:ApiService, 
    private dService: DataService,
     private router: Router,
     private datepipe: DatePipe) { 
      this.myDate = this.datepipe.transform(this.myDate, 'MMMM d');
      
      
      let paymentMode = this.dService.user;
    switch (paymentMode) {
      case "biller":  
      this.service.getBillerLiteralData().subscribe(data=> this.literals=data);
        break;
      case "sender":   
      this.service.getSenderLiteralData().subscribe(data=> this.literals=data);
        break;
      case "requester": 
      this.service.getRequesterLiteralData().subscribe(data=> this.literals=data);
    }
     }

  onsubmit() {
    this.router.navigate(['/home']);
    this.router.navigate(['/otpscreen']);
  }
  

  ngOnInit(): void {
    this.accountDetails=this.dService;
    }


  }