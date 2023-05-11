import { Component } from '@angular/core';

@Component({
    selector : 'app-ser',
    templateUrl: './server.component.html'
})
export class ServerComponent{ 
    serverId = 25;
    serverStatus = 'Online';

    getServerStatus(){
        return this.serverStatus;
    }
}
