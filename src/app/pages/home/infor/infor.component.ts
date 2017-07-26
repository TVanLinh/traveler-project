import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css']
})
export class InforComponent implements OnInit {
  @Input() blocks: any[];
  @Input() inforItem: any;

  constructor() {
  }

  ngOnInit() {
  }

}
