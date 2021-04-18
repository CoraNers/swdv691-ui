import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  loginTitle = "Please login...";
  userData = undefined;
  errorMessage = undefined;

  constructor(public dataService: DataServiceProvider, private dialogRef: MatDialogRef<LoginComponent>, 
    @Inject(MAT_DIALOG_DATA) data, private snackBar: MatSnackBar) { 

    }

  ngOnInit(): void {
  }

  submitLoginInfo() {
    this.dataService.doLogin(this.username, this.password)
    .subscribe((data) => {
      this.userData = data;
      this.snackBar.open('Login successful!', '', {
        duration: 2000,
        panelClass: ['success']
      });
      this.dialogRef.close(this.userData);
    }, error => {
      this.errorMessage = error;
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
