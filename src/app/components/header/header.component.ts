import {Component, ElementRef, OnInit} from "@angular/core";
import {LanguageService} from "../../services/language.service";

declare const jQuery: any;
@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  i18nMenu = {};
  i18nCore = {};
  constructor(private eleRef: ElementRef, private  languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageService.getData().subscribe((data: any) => {
      this.i18nMenu = data.menus;
      this.i18nCore = data.core;
    });
  }

  toggleMenu() {
    jQuery(this.eleRef.nativeElement).find('.menu-tab').toggleClass('tf-0');
  }
}
