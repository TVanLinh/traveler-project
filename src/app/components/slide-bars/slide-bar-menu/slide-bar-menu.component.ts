import {Component, Input, OnInit} from "@angular/core";
import {LanguageService} from "../../../services/language.service";

@Component({
  selector: '[app-slide-bar-menu]',
  templateUrl: './slide-bar-menu.component.html',
  styleUrls: ['./slide-bar-menu.component.css']
})
export class SlideBarMenuComponent implements OnInit {

   i18nMenu = {};
  constructor(private  languageService: LanguageService) { }

  ngOnInit() {
      this.languageService.getData().subscribe((data: any) => {
       this.i18nMenu = data.menus;
       // console.log(this.i18nMenu);
    } );
  }

}
