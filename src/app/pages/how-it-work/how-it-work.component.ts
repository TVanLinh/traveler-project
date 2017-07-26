import {Component, OnInit} from "@angular/core";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.css']
})
export class HowItWorkComponent implements OnInit {
  i18nBlocks: any[] = [];
  i18nInfor: any [] = [];
  i18nFeatures: any = {};
  i18nQuestion: any={};
  constructor(private languageSevice: LanguageService) {
  }

  ngOnInit() {
    this.languageSevice.getData().subscribe((data: any) => {
      this.i18nBlocks = data['how-work'].blocks.contents;
      this.i18nInfor = data['how-work'].info;
      this.i18nFeatures = data['how-work'].feature;
      this.i18nQuestion = data['how-work'].question;
    });
  }

}
