import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-makeapayment',
  templateUrl: './makeapayment.component.html',
  styleUrls: ['./makeapayment.component.scss'],
})
export class MakeapaymentComponent implements OnInit {
  data:any={};
  amount: any;
  SelectedAmount: number;
  // prevDate = new Date();
  literals:any={};

  
  // datePipe = new DatePipe();

  constructor(private service: ApiService, 
    private cService: DataService, 
    private router: Router) {
      let paymentMode = this.cService.user;
      
      switch (paymentMode) {
        case "biller": {
          this.service.getBillerData().subscribe(data => this.data = data);
          this.service.getBillerLiteralData().subscribe(data => this.literals = data);
        break;
        }

        case "sender":{
         this.service.getSenderData().subscribe(data => this.data = data);
         this.service.getSenderLiteralData().subscribe(data => this.literals = data);
        break;
        }
        case "requester":{

        this.service.getRequesterData().subscribe(data => this.data = data);
        this.service.getRequesterLiteralData().subscribe(data => this.literals = data);
        }
      }

      
     
      
      

      // this.prevDate.setDate(this.prevDate.getDate() - 2);
      
    // this.setDob = datePipe.transform(userdate, 'dd/MM/yyyy');
    }
    

    ngOnInit(): void {
      
    }
    onsubmit() {
      this.router.navigate(['/otpscreen']);
      this.router.navigate(['/amounttopay']);
    }
    
   
    

    accountlist = '';
    accounts = [
      { accountType: 'Credit card(2.3% fee)', balance: '$365.27' },
      { accountType: 'main checking(*4738)', balance: '$5,164.98' }
    ]
  
    
    displayStyle = "none";
    
    openPopup() {
      this.displayStyle = "block";
    }
    
    closePopup() {
      this.displayStyle = "none";
    }
  }
