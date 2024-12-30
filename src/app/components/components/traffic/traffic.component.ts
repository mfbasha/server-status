import { Component, input } from '@angular/core';
import { ITrafficItem } from 'app/models/trafficitem.model';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  dummyTrafficData = input<ITrafficItem[]>([]);

  get maxTrafficValue() {
    return Math.max(...this.dummyTrafficData().map((data: any) => data.value));
  }
  // currentStatus=input('online');
}
