import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() logoutUser: any;
  title = 'lets-multiply';

  username: string = undefined;
  password: string = undefined;
  loggedInFirstName: string;
  getLoggedInUserData: object = undefined;
  goToWelcome = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.reset();
    this.openDialog();
  }

  reset() {
    this.username = undefined;
    this.password = undefined;
    this.loggedInFirstName = undefined;
    this.getLoggedInUserData = undefined;
    this.goToWelcome = false;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      username: this.username, 
      password: this.password
    };

    let dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getLoggedInUserData = result;
      this.goToWelcome = true;
    });
  }

}
