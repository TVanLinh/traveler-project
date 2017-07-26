import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {Injectable} from "@angular/core";

@Injectable()
export class TaskSevice {
  constructor(private  http: Http) {
  }

  getTask(url) {
   return  this.http.get(url).map((data: Response) => {
      return data.json();
    })
  }
}
