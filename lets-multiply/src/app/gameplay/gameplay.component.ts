import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {
  @Input() userData: any;
  @Input() mode: string;
  @Input() category: any;

  constructor() { }

  ngOnInit(): void {
    console.log('USERDATA INPUT ' + this.userData);
    console.log('USERDATA firstname ' + this.userData.firstName);
    console.log('USERDATA id ' + this.userData._id);
    console.log('MODE INPUT ' + this.mode);
    console.log('CATEGORY INPUT ' + this.category);
  }

}
