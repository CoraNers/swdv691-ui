import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  loggedInFirstName: string;
  getLoggedInUserData: object;
  goToWelcome = false;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.openDialog();
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
      console.log('*******');
      console.log(this.getLoggedInUserData);
      this.goToWelcome = true;
    });
  }

}
