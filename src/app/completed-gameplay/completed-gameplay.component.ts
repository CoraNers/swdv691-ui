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
  @Input() lengthOfTime: String;

  constructor() { }

  ngOnInit(): void {
  }

}
