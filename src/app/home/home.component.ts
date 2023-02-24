import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';



import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  private _model: NgbDate;
  // date: {year: number, month: string};
  
  isOpen=false
  date=new Date(); 
 
  constructor(
    private service: DataService,
    private router: Router,
    private calendar: NgbCalendar) { }

    weekDays = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Satarday',
      7: 'Sunday'
    }

    selectedDay: string = '';
    set model(val) {
      this._model = val;
      this.selectedDay = this.weekDays[this.calendar.getWeekday(this.model)]
    }
  
    get model() {
      return this._model;
    }
  
    selectToday() {
      this.model = this.calendar.getToday();
    }
  ngOnInit(): void {
    this.selectToday();
  }

  onPaymentClick(val: string) {

    this.service.user = val;
    this.router.navigate(['/amounttopay']);
  }
 
}




