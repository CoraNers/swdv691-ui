import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-gameplay',
  templateUrl: './completed-gameplay.component.html',
  styleUrls: ['./completed-gameplay.component.scss']
})
export class CompletedGameplayComponent implements OnInit {
  @Input() category: any;
  @Input() correct: number;
  @Input() incorrect: number;
  @Input() gameplayQuestionsAnswered: any;
  @Input() timeInSecondsToComplete: any;

  goToHistory = false;
  timeDisplayable = undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('timeInSecondsToComplete of time - ' + this.timeInSecondsToComplete);
    this.convertTimeInSecondsForDisplayableTime();
  }

  convertTimeInSecondsForDisplayableTime() {
    if (this.timeInSecondsToComplete > 60) {
      // the user took more than 1 minute to complete the exercise.
      // convert to minutes and seconds
      var minutesAndSeconds = this.timeInSecondsToComplete / 60;
      console.log('MINUTES AND SECONDS', minutesAndSeconds);

    }
  }

  goToUserHistory() {
    this.goToHistory = true;
  }

}
