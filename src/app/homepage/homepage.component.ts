import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  display=0;
  flag=false;

  constructor(){

  }
  onclick(){
    console.log("hi");
    this.display=1;
  }


}
