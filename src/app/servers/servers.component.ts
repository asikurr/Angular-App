import { Component } from '@angular/core';

@Component({
 // selector: 'app-servers', // this is user like - <app-servers></app-servers> in html file.
 // selector: '[app-servers]',  // this is user like - <div app-servers></div> in html file.
 selector: '.app-servers', // this is user like - <div class="app-servers"></div> in html file.
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  servetStatusIs = "Server are not created yet!";
  allowBtnServer = false;
  serverName = '';
  constructor(){
    setTimeout(() => {
      this.allowBtnServer = true;
    }, 2000)
  }

  onCreatedServer(){
    this.servetStatusIs = "Server is Creating..";
  }
  // OnInputServerName(event : Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
