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

  constructor() { }

  ngOnInit(): void {
    console.log('HISTORY DETAIL HISTORYDATA ', this.historyData);
    console.log('HISTORY DETAIL ROW ID ', this.historyRowIdSelected);
    console.log('HISTORY DETAIL USERDATA ', this.userData);

    this.historyDetailItem = _.filter(this.historyData, { '_id': this.historyRowIdSelected});
    this.historyDetailItem = this.historyDetailItem[0];

    console.log('AFTER LODASH', this.historyDetailItem);
  }

  goHome() {
    this.doGoHome = true;
  }

  goToUserHistory() {
    console.log('GOT TO GOTO USER HISTORY FROM DETAIL COMPONENT');
    this.doGoBackToHistory = true;
  }

}
