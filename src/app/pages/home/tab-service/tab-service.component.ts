import {Component, ElementRef, Input, OnInit} from "@angular/core";
declare var jQuery: any;
@Component({
  selector: 'app-tab-service',
  templateUrl: './tab-service.component.html',
  styleUrls: ['./tab-service.component.css']
})
export class TabServiceComponent implements OnInit {

  @Input() inforItem: any = {};

  constructor(private  eleRef: ElementRef) {
  }

  ngOnInit() {
  }

  openTab(nameTab: string) {
    jQuery(this.eleRef.nativeElement).find('.tab-button').removeClass("here");
    jQuery(this.eleRef.nativeElement).find(".t_" + nameTab).removeClass("here");
    jQuery(this.eleRef.nativeElement).find(".tab").css({display: "none"});
    jQuery(this.eleRef.nativeElement).find("#" + nameTab).css({display: "block"});
  }

}


