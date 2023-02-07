import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
// import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 

  constructor(
    private service: DataService,
    private router: Router) { }




  ngOnInit(): void {
  }

  onPaymentClick(val: string) {

    this.service.user = val;
    this.router.navigate(['/amounttopay']);
  }
 
}




