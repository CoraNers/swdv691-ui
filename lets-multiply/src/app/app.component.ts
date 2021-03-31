import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lets-multiply';

  username: string;
  password: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '350px',
      disableClose: true,
      data: 
      {
        username: this.username, 
        password: this.password
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
