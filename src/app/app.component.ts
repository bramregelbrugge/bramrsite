import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="center-text">
  <div
  class="name"
  [class.grow]="isPageLoaded"
  >Bram Regelbrugge</div>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isPageLoaded = false;

  ngOnInit() {
    this.isPageLoaded = true;
    console.log('%c Hi! what are you doing here? ', 'background: #222; color: #bada55');
  }
}
