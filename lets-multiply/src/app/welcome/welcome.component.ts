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

  constructor() { 
  }

  ngOnInit(): void {
    console.log('inside welcome component');
    console.log('-------');
    console.log(this.userData);
  }

  playGame(categoryNumber) {
    // categoryNumber that gets passed in is zero based - add one before creating and randomizing questions.
    // TODO 
    console.log('decided to play category: ' + categoryNumber);
  }

  goToUserHistory() {
    this.goToHistory = true;
  }

}
