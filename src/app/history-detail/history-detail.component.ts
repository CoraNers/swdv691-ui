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
    return dateParts[0].trim(); 
  }

  calculatePercentCorrect(numCorrect) {
    return (numCorrect / 12 * 100).toFixed(2);
  }

  validateCorrectness(questionAndAnswer) {
    let regex = /(\d+) x (\d+) = (\d+)/;
    let parts = regex.exec(questionAndAnswer);
    if (parts != null) {
      let firstNum = Number(parts[1].trim()) ? Number(parts[1].trim()) : undefined; 
      let secondNum = Number(parts[2].trim()) ? Number(parts[2].trim()) : undefined; 
      let answer = Number(parts[3].trim()) ? Number(parts[3].trim()) : undefined; 
      if(firstNum != undefined && secondNum != undefined && answer != undefined) {
        if (firstNum * secondNum == answer) {
          return 'Correct';
        } else {
          return 'Incorrect';
        }
      } else {
        return 'Unknown';
      }
    } else {
      return 'Unknown'
    }
  }

}
