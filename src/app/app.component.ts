import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zerodha';

  isLoading: boolean = true;

  // constructor() {
  //   // Simulate a delay for loading
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 10000); // Adjust the delay as needed
  // }
}
