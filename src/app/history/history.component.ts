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

  constructor(public dataService: DataServiceProvider, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchHistory();
  }

  fetchHistory() {
    this.dataService.doGetHistory(this.userData._id)
    .subscribe((data) => {
      this.userData = data;
      console.log(data);
    }, error => {
      this.errorMessage = error;
      this.snackBar.open('Error while getting user history. Please try again later.', '', {
        duration: 2000,
        panelClass: ['danger']
      });
    });
  }

}
