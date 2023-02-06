import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
@Component({
  selector: 'app-amounttopay',
  templateUrl: './amounttopay.component.html',
  styleUrls: ['./amounttopay.component.scss']
})
export class AmounttopayComponent implements OnInit {

  billerdata:any
  senderdata:any
  requesterdata:any
  status=true
  amount:number
  constructor(private service:DataserviceService) { }

  ngOnInit(): void {
    this.service.getBillerData().subscribe(data=>this.billerdata=data)
    this.service.getSenderData().subscribe(data=>this.senderdata=data)
    this.service.getRequesterData().subscribe(data=>this.requesterdata=data)

  }
  amounttopay(){
    this.status=false
  }
  backbtn(){
    this.status=true
  }
  display(value){
    console.log (value)
    this.amount=value
    console.log (this.amount)
  }
}
