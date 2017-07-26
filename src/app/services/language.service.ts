import {Injectable} from "@angular/core";
import {TaskSevice} from "./task.service";
import {Subscription} from "rxjs/Subscription";
@Injectable()
export class LanguageService {
  data: any[];
  private url = "/assets/i18n/vietnamese.json";
  constructor(private  taskSevice: TaskSevice) {}
  getData() {
    return this.taskSevice.getTask(this.url);
  }

  setUrl(url: string) {
    this.url = url;
  }
}
