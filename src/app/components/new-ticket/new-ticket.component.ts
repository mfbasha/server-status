import { Component, ElementRef, HostBinding, inject, ViewEncapsulation } from '@angular/core';
import { AppbuttonComponent } from '../appbutton/appbutton.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [AppbuttonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  host: {
    class: 'new-ticket-container',
    '(click)': 'onClick()',
  },
})
export class NewTicketComponent {
  // @HostBinding('class') className = 'new-ticket-container';
  private el=inject(ElementRef);
  onClick()
  {
    console.log('clicked');
    console.log(this.el.nativeElement);
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
