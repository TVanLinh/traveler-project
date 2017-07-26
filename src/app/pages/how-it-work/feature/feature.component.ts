import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  @Input() features: any[];
  @Input() title: any;
  constructor() {
  }

  ngOnInit() {
  }

}
