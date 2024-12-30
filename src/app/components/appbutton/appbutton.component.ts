import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appbutton], a[appbutton]',
  standalone: true,
  imports: [],
  templateUrl: './appbutton.component.html',
  styleUrl: './appbutton.component.css'
})
export class AppbuttonComponent {
displayText=input('click me');
}
