import {Component, OnInit} from "@angular/core";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-meaning',
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.css']
})
export class MeaningComponent implements OnInit {
  i18nCore: any = {};
  i18nMean: any = {};
  i18nMeanInfor: any[] = [];
  i18nMeanWork: any = {};

  constructor(private  languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageService.getData().subscribe((data: any) => {
      this.i18nCore = data.core;
      this.i18nMean = data.meaning;
      this.i18nMeanInfor = data.meaning.info;
      this.i18nMeanWork = data.meaning['mean-work'];
    });
  }

}
