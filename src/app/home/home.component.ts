import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../service/connection.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private service: ConnectionService, private router: Router) { }

  ngOnInit(): void {
  }

  onPaymentClick(val: string) {

    this.service.user = val

    this.router.navigate(['/amounttopay']);


  }



}
