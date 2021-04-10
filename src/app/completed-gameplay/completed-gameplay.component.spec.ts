import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedGameplayComponent } from './completed-gameplay.component';

describe('CompletedGameplayComponent', () => {
  let component: CompletedGameplayComponent;
  let fixture: ComponentFixture<CompletedGameplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedGameplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
