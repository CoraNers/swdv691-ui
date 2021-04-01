import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @Input() userData: any;
  mode = 'practice';

  constructor() { 
  }

  ngOnInit(): void {
    console.log('inside welcome component');
    console.log('-------');
    console.log(this.userData);
  }

  playGame(categoryNumber) {
    console.log('decided to play category: ' + categoryNumber);
  }

}
