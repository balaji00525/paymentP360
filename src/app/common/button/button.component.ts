import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'p360-buttonDone',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() data="";
  @Input() amount="";
  @Input() recipient="";
  constructor() { }

  ngOnInit(): void {
  }

}