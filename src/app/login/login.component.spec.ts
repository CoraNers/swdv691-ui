import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DataServiceProvider } from 'src/providers/data-service/data-service';
import { CompletedGameplayComponent } from '../completed-gameplay/completed-gameplay.component';
import { GameplayComponent } from '../gameplay/gameplay.component';
import { HistoryDetailComponent } from '../history-detail/history-detail.component';
import { HistoryComponent } from '../history/history.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let dataService: any;
  let dialog: any;
  let mockSnackbar: any;

  dialog = {
    close: () => {}
  };

  mockSnackbar = {
    open: () => {}
  };

  beforeEach(() => {
    dataService = {
      doLogin: () => {}
    };

    component = new LoginComponent(dataService, dialog, mockSnackbar);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onKeydown', () => {
    it('should call submitLoginInfo', () => {
      let submitLoginInfoSpy = spyOn(component, 'submitLoginInfo').and.callFake(() => {});
      component.onKeydown('event');
      expect(submitLoginInfoSpy).toHaveBeenCalled();
    });
  });

  describe('submitLoginInfo', () => {
    it('should call dataService doLogin function', () => {
      let submitLoginInfoSpy = spyOn(component.dataService, 'doLogin').and.returnValue(of('successTestUserData'));
      component.submitLoginInfo();
      expect(submitLoginInfoSpy).toHaveBeenCalled();
    });

    it('should set call the service with username and password', () => {
      let submitLoginInfoSpy = spyOn(component.dataService, 'doLogin').and.returnValue(of('successTestUserData'));
      component.username = "testusername";
      component.password = "testpassword";
      component.submitLoginInfo();
      expect(submitLoginInfoSpy).toHaveBeenCalledWith(component.username, component.password);
    });

    it('should set userdata on the component', () => {
      spyOn(component.dataService, 'doLogin').and.returnValue(of('successTestUserData'));
      component.submitLoginInfo();
      expect(component.userData).toEqual('successTestUserData');
    });
    
  });


});
