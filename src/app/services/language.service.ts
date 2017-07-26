import {Injectable} from "@angular/core";
import {TaskSevice} from "./task.service";
@Injectable()
export class LanguageService {
  data: any[];
  observable = null;
  private url = "/assets/i18n/vietnamese.json";

  constructor(private  taskSevice: TaskSevice) {
  }

  getData() {
    if (this.observable == null) {
      return this.observable = this.taskSevice.getTask(this.url);
    }
    return this.taskSevice.getTask(this.url);
  }

  setUrl(url: string) {
    this.url = url;
  }
}
