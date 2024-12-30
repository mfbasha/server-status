import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerhealthService {
  currentStatus = signal<string>('online');
  statuses = ['online', 'offline', 'unknown'];
  intervalId: any;
  constructor() {}

  checkstatus(): string {
    const randomIndex = Math.floor(Math.random() * this.statuses.length);
    this.currentStatus.set(this.statuses[randomIndex]);
    return this.currentStatus();
  }
}
