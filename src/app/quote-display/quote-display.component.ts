import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { loadQuote } from '../quotes.actions';
import { QuotesState } from '../quotes.reducer';

// Interface pour le state global de l'app
interface AppState {
  quotes: QuotesState;
}

@Component({
  selector: 'app-quote-display',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './quote-display.component.html',
  styleUrl: './quote-display.component.css'
})
export class QuoteDisplayComponent {
  // 📊 Observables pour accéder au state
  quotesState$: Observable<QuotesState>;

  constructor(private store: Store<AppState>) {
    // On s'abonne à la partie 'quotes' du store
    this.quotesState$ = store.select('quotes');
  }

  // 🎯 Méthode pour charger une nouvelle citation
  loadNewQuote() {
    // On dispatch l'action loadQuote
    // L'Effect va intercepter cette action et appeler l'API
    this.store.dispatch(loadQuote());
  }
}
