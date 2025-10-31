import { createAction, props } from '@ngrx/store';
import { Quote } from './services/quotes.service';

// Action pour DEMANDER une citation (déclenchée par le composant)
export const loadQuote = createAction(
  '[Quotes] Load Quote'
);

// Action pour SUCCÈS (déclenchée par l'Effect après l'appel API)
export const loadQuoteSuccess = createAction(
  '[Quotes] Load Quote Success',
  props<{ quote: Quote }>() // On passe la citation reçue
);

// Action pour ÉCHEC (déclenchée par l'Effect en cas d'erreur)
export const loadQuoteFailure = createAction(
  '[Quotes] Load Quote Failure',
  props<{ error: string }>() // On passe le message d'erreur
);
