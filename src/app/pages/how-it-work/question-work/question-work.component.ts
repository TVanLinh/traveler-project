import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-work',
  templateUrl: './question-work.component.html',
  styleUrls: ['./question-work.component.css']
})
export class QuestionWorkComponent implements OnInit {
  @Input() question;
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
