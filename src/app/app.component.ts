import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';

  city: string = "Toronto";
  color = "blue";
  primaryButton = "btn btn-primary"

  username1 = "John";
  username2 = "David";

  numClicks = 0;
 
  @HostListener('dblclick', ['$event']) ddAlert(e) {
  	alert("@HostListener was triggered.");
  }

}
