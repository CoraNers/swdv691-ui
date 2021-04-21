import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
  @Input() historyData: any;
  @Input() historyRowIdSelected: any;
  @Input() userData: any;
  doGoHome = false;
  doGoBackToHistory = false;
  historyDetailItem = undefined;
  splitData = undefined;

  constructor() { }

  ngOnInit(): void {
    this.historyDetailItem = _.filter(this.historyData, { '_id': this.historyRowIdSelected});
    this.historyDetailItem = this.historyDetailItem[0];
  }

  goHome() {
    this.doGoHome = true;
  }

  goToUserHistory() {
    this.doGoBackToHistory = true;
  }

  parseOutQuestionAndAnswer(questionAndAnswer, returnQuestionOnly) {
    let splitted = questionAndAnswer.split('=');
    var i = 0;
    if (returnQuestionOnly) {
      return splitted[0].trim();
    } else {
      return splitted[1].trim();
    }
  }

  parseDate(dateToParse) {
    let regex = /(.* .*:\d\d )/;
    let dateParts = regex.exec(dateToParse);
    return dateParts[0]; 
  }

  calculatePercentCorrect(numCorrect) {
    return (numCorrect / 12 * 100).toFixed(2);
  }

}
