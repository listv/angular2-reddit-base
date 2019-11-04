import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public allowNewServer = false;
  public serverCreationStatus = 'No server was created';
  public serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
  ngOnInit() {}
}
