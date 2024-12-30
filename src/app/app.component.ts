import { Component, computed, inject, signal } from '@angular/core';
import { HeaderComponent } from "./components/components/header/header.component";
import { ServerstatusComponent } from "./components/components/serverstatus/serverstatus.component";
import { TrafficComponent } from "./components/components/traffic/traffic.component";
import { TicketsComponent } from "./components/components/tickets/tickets.component";
import { NavComponent } from "./components/components/nav/nav.component";
import { dummyTrafficData } from "./data/dummy-traffic";
import { ServerhealthService } from './services/serverhealth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerstatusComponent,
    TrafficComponent,
    TicketsComponent,
    NavComponent,
  ],
})
export class AppComponent {
  dummytrafficData = signal(dummyTrafficData);
  // maxTraffic = signal(
  //   Math.max(...this.dummytrafficData().map((data: any) => data.value))
  // );
  currentStatus = signal('online');
  intervalId: any;
  serverHealth = inject(ServerhealthService);
  constructor() {

  }
  ngOnInit() {

    this.intervalId = setInterval(() => {
      this.checkstatus();
    }, 5000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  checkstatus() {
    this.currentStatus.set(this.serverHealth.checkstatus());
    // return this.statuses[randomIndex].toLowerCase();
  }
}
