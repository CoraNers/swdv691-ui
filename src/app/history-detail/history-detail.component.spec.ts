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
import { CompletedGameplayComponent } from '../completed-gameplay/completed-gameplay.component';
import { GameplayComponent } from '../gameplay/gameplay.component';
import { HistoryComponent } from '../history/history.component';
import { LoginComponent } from '../login/login.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HistoryDetailComponent } from './history-detail.component';

describe('HistoryDetailComponent', () => {
  let component: HistoryDetailComponent;
  let fixture: ComponentFixture<HistoryDetailComponent>;

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
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
