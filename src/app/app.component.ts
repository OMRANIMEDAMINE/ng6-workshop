import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng6-workshop';
  myVariable="application Test"
  constructor(){
    this.myVariable="15"
  }

}
