import {Component} from '@angular/core';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyCounterComponent, QuoteDisplayComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
}