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
  dataSource = [];

  constructor(public dataService: DataServiceProvider, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchHistory();
  }

  fetchHistory() {
    this.dataService.doGetHistory(this.userData._id)
    .subscribe((data) => {
      this.historyData = data;
      console.log('HISTORY DATA RETURNED');
      console.log(this.historyData);
      this.dataSource = this.historyData;
    }, error => {
      this.errorMessage = error;
      this.snackBar.open('Error while getting user history. Please try again later.', '', {
        duration: 2000,
        panelClass: ['danger']
      });
    });
  }

}
