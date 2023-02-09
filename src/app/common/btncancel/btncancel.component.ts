import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btncancel',
  templateUrl: './btncancel.component.html',
  styleUrls: ['./btncancel.component.scss']
})
export class BtncancelComponent implements OnInit {
  @Input() data:any={}
  constructor() { }

  ngOnInit(): void {
  }

}
