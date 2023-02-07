import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btndone',
  templateUrl: './btndone.component.html',
  styleUrls: ['./btndone.component.scss']
})
export class BtndoneComponent implements OnInit {
  @Input() data:any=""
  @Input() amount:any=""
  @Input() recipient=""
  constructor() { }

  ngOnInit(): void {
  }

}
