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
    var minutes = Math.floor(this.timeInSecondsToComplete / 60);
    var seconds = this.timeInSecondsToComplete - minutes * 60;
    this.timeDisplayable = minutes + " minutes " + seconds + " seconds";
  }

  goToUserHistory() {
    this.goToHistory = true;
  }

}
