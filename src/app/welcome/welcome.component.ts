import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @Input() userData: any;
  mode = 'practice';
  categoryArray = new Array(12); 
  goToHistory = false;
  goToGameplay = false;
  categoryToPlay = undefined;

  constructor() { 
  }

  ngOnInit(): void {
  }

  playGame(categoryNumber) {
    // categoryNumber that gets passed in is zero based - add one before creating and randomizing questions.
    this.categoryToPlay = categoryNumber + 1;
    this.goToGameplay = true;
  }

  goToUserHistory() {
    this.goToHistory = true;
  }

}
