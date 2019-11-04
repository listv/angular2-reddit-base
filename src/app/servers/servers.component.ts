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
  public isServerCreated = false;
  public servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
  ngOnInit() {}
}
