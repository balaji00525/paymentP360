import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
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
  imagePath: string = environment.imagePath;
  Image: string = environment.Image;
  paymentMode:string;
  


  constructor(private service:ApiService, 
    private dataService: DataService,
     private router: Router,
     private datepipe: DatePipe) { 

      this.myDate = this.datepipe.transform(this.myDate, 'MMMM d');
      let paymentMode = this.dataService.user;
      this.paymentDetails(this.paymentMode); 
     }

     paymentDetails(payMode){
      switch (payMode) {
        case "biller": {
          this.service
        .getBillerLiteralData()
        .subscribe(data=> this.literals=data);
          break;
        } 
        
        case "sender": {
          this.service
          .getSenderLiteralData()
          .subscribe(data=> this.literals=data);
            break;
        }  
        
        case "Requestor": 
        {
          this.service
          .getRequestorLiteralData()
          .subscribe(data=> this.literals=data);
        }
       
      }
     }

  onsubmit() {
    this.router.navigate(['/home']);
    this.router.navigate(['/otpscreen']);
  }
  

  ngOnInit(): void {
    this.imagePath += this.dataService.imagePicture;
    this.Image +=this.dataService.tick;
    this.accountDetails=this.dataService;
    }


  }