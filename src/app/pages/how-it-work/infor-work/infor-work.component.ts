import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-infor-work',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css']
})
export class InforWorkComponent implements OnInit {
  @Input() i18nInfo: any[];
  constructor() { }

  ngOnInit() {
  }

}
