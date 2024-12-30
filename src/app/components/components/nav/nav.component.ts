import { Component } from '@angular/core';
import { AppbuttonComponent } from 'app/components/appbutton/appbutton.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [AppbuttonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {}
