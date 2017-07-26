import {Component, OnInit} from "@angular/core";
import {TaskSevice} from "../../services/task.service";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  dataI18n: any;

  constructor(private  taskService: TaskSevice) {
    // this.taskService.getTask("/assets/i18n/vietnamese.json").subscribe((data: any[]) => {
    //   console.log(data[0].test);
    //   this.dataI18n = data;
    //   console.log("data:" + this.dataI18n[0].menus[0].one);
    // });
  }

  ngOnInit() {
  }

  openClick() {

  }

}
