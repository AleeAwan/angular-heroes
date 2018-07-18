import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  newServerStatus = 'No Server Created';
  newServerName = 'Test Server';
  constructor() {
    setTimeout( () => this.allowNewServer = true, 2000 );
  }
  serverCreated() {
    this.newServerStatus = 'Server Created';
  }
  onServerNameUpdate(event: any) {
    this.newServerName = event.target.value;
  }
  ngOnInit() {
  }

}
