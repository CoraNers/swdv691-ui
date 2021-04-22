import { Overlay } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CompletedGameplayComponent } from './completed-gameplay/completed-gameplay.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        WelcomeComponent,
        HistoryComponent,
        GameplayComponent,
        HistoryDetailComponent,
        CompletedGameplayComponent,
        LoginComponent
      ],
      providers: [
        MatDialog,
        Overlay
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lets-multiply'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lets-multiply');
  });

});
