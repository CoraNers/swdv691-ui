import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import "../../styles.scss";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginTitle = 'Please login...';
  userData = undefined;
  errorMessage = undefined;
  showSpinner = false;

  constructor(public dataService: DataServiceProvider, private dialogRef: MatDialogRef<LoginComponent>, 
    private snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
  }

  submitLoginInfo() {
    this.showSpinner = true;
    this.dataService.doLogin(this.username, this.password)
    .subscribe((data) => {
      this.userData = data;
      this.showSpinner = false;
      this.snackBar.open('Login successful!', '', {
        duration: 2000,
        panelClass: ['success']
      });
      this.dialogRef.close(this.userData);
    }, error => {
      this.errorMessage = error;
      this.showSpinner = false;
      this.snackBar.open('Login unsuccessful. Please try again.', '', {
        duration: 2000,
        panelClass: ['danger']
      });
    });
  }

  onKeydown(event) {
    this.submitLoginInfo();
  }

}
