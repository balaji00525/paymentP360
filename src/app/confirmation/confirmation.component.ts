import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { ConnectionService } from '../service/connection.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  data:any={};
  constructor(private service: DataserviceService, private cService: ConnectionService, private router: Router) { }

  onsubmit() {
    this.router.navigate(['/otpscreen']);
  }
  ngOnInit(): void {
    let paymentMode = this.cService.user;
    switch (paymentMode) {
      case "biller": this.service.getBillerData().subscribe(data => this.data = data);
        break;
      case "sender": this.service.getSenderData().subscribe(data => this.data = data);
        break;
      case "requester": this.service.getRequesterData().subscribe(data => this.data = data)
    }



    // this.service.getConfirmation().subscribe({ 
    //   next:(data)=>
    //   { this.data=data;
    //     this.accountList=this.data.accountList
    //     console.log (this.accountList)
    //      },
    //     error:(error)=>{ 
    //       console.log(error)
    //       alert('error in reading')
    //      } })


    // this.service.getBillerData().subscribe(data=>this.data=data)


  }

  // displayStyle = "none";

  // openPopup() {
  //   this.displayStyle = "block";
  // }
  // closePopup() {
  //   this.displayStyle = "none";
  // }
}
