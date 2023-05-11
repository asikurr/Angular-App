import { Component } from '@angular/core';

@Component({
 // selector: 'app-servers', // this is user like - <app-servers></app-servers> in html file.
 // selector: '[app-servers]',  // this is user like - <div app-servers></div> in html file.
 selector: '.app-servers', // this is user like - <div class="app-servers"></div> in html file.
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowBtnServer = false;
  constructor(){
    setTimeout(() => {
      this.allowBtnServer = true;
    }, 2000)
  }
}
