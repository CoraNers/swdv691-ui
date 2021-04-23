import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { GameplayComponent } from '../gameplay/gameplay.component';
import { HistoryDetailComponent } from '../history-detail/history-detail.component';
import { HistoryComponent } from '../history/history.component';
import { LoginComponent } from '../login/login.component';
import { WelcomeComponent } from '../welcome/welcome.component';

import { CompletedGameplayComponent } from './completed-gameplay.component';

describe('CompletedGameplayComponent', () => {
  let component: CompletedGameplayComponent;

  beforeEach(() => {
    component = new CompletedGameplayComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call convertTimeInSecondsForDisplayableTime', () => {
      let convertTimeInSecondsForDisplayableTimeSpy = spyOn(component, 'convertTimeInSecondsForDisplayableTime').and.callFake(() => {});
      component.ngOnInit();
      expect(convertTimeInSecondsForDisplayableTimeSpy).toHaveBeenCalled();
    });
  });

  describe('convertTimeInSecondsForDisplayableTime', () => {
    it('should set timeDisplayable correctly 1 min and change', () => {
      component.timeInSecondsToComplete = 85;
      component.convertTimeInSecondsForDisplayableTime();
      expect(component.timeDisplayable).toEqual('1 minute 25 seconds');
    });

    it('should set timeDisplayable correctly - several minutes', () => {
      component.timeInSecondsToComplete = 185;
      component.convertTimeInSecondsForDisplayableTime();
      expect(component.timeDisplayable).toEqual('3 minutes 5 seconds');
    });

    it('should set timeDisplayable correctly - 1 min 1 second', () => {
      component.timeInSecondsToComplete = 61;
      component.convertTimeInSecondsForDisplayableTime();
      expect(component.timeDisplayable).toEqual('1 minute 1 second');
    });

    it('should set timeDisplayable correctly - several minutes 1 second', () => {
      component.timeInSecondsToComplete = 121;
      component.convertTimeInSecondsForDisplayableTime();
      expect(component.timeDisplayable).toEqual('2 minutes 1 second');
    });
  });
});
