import {Component, OnInit} from "@angular/core";
import {LanguageService} from "../../services/language.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataI18n: any = {};
  i18nBlocks = [];
  i18nInfor = [];
  infor1 = {};
  infor2 = {};
  map = {};

  constructor(private  languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageService.getData().subscribe((data: any) => {
      this.dataI18n = data;
      this.i18nBlocks = data.home.blocks;
      this.i18nInfor = data.home['info'];
      // this.infor1 = this.infor[0];
      // this.infor2 = this.infor[1];
      this.map = data.home.map;
    });
  }
}
