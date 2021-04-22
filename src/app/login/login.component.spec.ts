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


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatDialogModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatInputModule 
      ],
      declarations: [ 
        LoginComponent, 
        WelcomeComponent,
        HistoryComponent,
        GameplayComponent,
        HistoryDetailComponent,
        CompletedGameplayComponent
      ],
      providers: [
        HttpClient,
        MatDialog,
        { provide: MatDialogRef, useValue: {} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onKeydown', () => {
    it('should call submitLoginInfo', () => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      let submitLoginInfoSpy = spyOn(component, 'submitLoginInfo').and.callFake(() => {});
      component.onKeydown('keydownEvent');
      expect(submitLoginInfoSpy).toHaveBeenCalled();
    });
  });

  // describe('submitLoginInfo', () => {
  //   fit('should set userData if successful', () => {
  //     fixture = TestBed.createComponent(LoginComponent);
  //     component = fixture.componentInstance;
  //     let submitLoginInfoSpy = jasmine.createSpyObj('DataServiceProvider', ['doLogin']).and.returnValue('successTestData');
  //     component.onKeydown('keydownEvent');
  //     expect(submitLoginInfoSpy).toHaveBeenCalled();
  //   });
  // });


});
