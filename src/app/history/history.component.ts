import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceProvider } from 'src/providers/data-service/data-service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input() userData: any;
  errorMessage = undefined;
  historyData = undefined;
  // dataSource = [];
  // displayedColumns: string[] = ['Date/Time', 'Questions Attempted', '% Correct', 'Time', 'Detail URL'];
  displayedColumns: string[] = ['date', 'questionsAttempted', 'percentCorrect'];

  constructor(public dataService: DataServiceProvider, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchHistory();
  }

  fetchHistory() {
    this.dataService.doGetHistory(this.userData._id)
    .subscribe((data) => {
      this.historyData = data;
    }, error => {
      this.errorMessage = error;
      this.snackBar.open('Error while getting user history. Please try again later.', '', {
        duration: 2000,
        panelClass: ['danger']
      });
    });
  }

  getPercentage(numCorrect) {
    return (numCorrect / 12 * 100).toFixed(2);
  }

  parseDate(dateToParse) {
    let regex = /(.* .*:\d\d )/;
    let dateParts = regex.exec(dateToParse);
    return dateParts[0]; 
  }

  parseLengthOfTime(lengthOfTime) {
    if (lengthOfTime) {
      if (lengthOfTime > 60) {
        // more than 60 seconds for 12 questions - convert to minutes and seconds for display
        return this.convertToMinutesAndSeconds(lengthOfTime);
      } else {
        // less than 60 seconds for 12 questions - display nicely
        return lengthOfTime + " sec.";
      }
    } else {
      return "";
    }
  }

  convertToMinutesAndSeconds(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return minutes + " min. " + seconds + " sec.";
  }

}
