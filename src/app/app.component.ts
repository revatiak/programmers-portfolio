import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programmer-portfolio';

  // Variable to show one selected section at a time.
  isPersonalSectionSelected : boolean = true;

  // Method gets called, when section is being changed by the user.
  changeSection() {
    this.isPersonalSectionSelected = !this.isPersonalSectionSelected;
    return;
  }
}
