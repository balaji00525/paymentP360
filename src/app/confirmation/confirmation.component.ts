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

  constructor(private service:ApiService, 
    private dService: DataService,
     private router: Router,
     private datepipe: DatePipe) { 
      this.myDate = this.datepipe.transform(this.myDate, 'MMMM d');
      let paymentMode = this.dService.user;
    switch (paymentMode) {
      case "biller": this.service.getBillerData().subscribe(data => this.data = data);
        break;
      case "sender": this.service.getSenderData().subscribe(data => this.data = data);
        break;
      case "requester": this.service.getRequesterData().subscribe(data => this.data = data);
    }
     }

  onsubmit() {
    this.router.navigate(['/home']);
    this.router.navigate(['/otpscreen']);
  }
  

  ngOnInit(): void {
    
    }


  }