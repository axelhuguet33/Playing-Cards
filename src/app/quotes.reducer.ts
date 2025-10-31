import { createReducer, on } from '@ngrx/store';
import { loadQuote, loadQuoteSuccess, loadQuoteFailure } from './quotes.actions';
import { Quote } from './services/quotes.service';

// Interface pour définir la forme du state
export interface QuotesState {
  quote: Quote | null;      // La citation actuelle (null au début)
  loading: boolean;         // Indicateur de chargement
  error: string | null;     // Message d'erreur (null si pas d'erreur)
}

// État initial
export const initialState: QuotesState = {
  quote: null,
  loading: false,
  error: null
};

export const quotesReducer = createReducer(
  initialState,
  
  // Quand on demande une citation
  on(loadQuote, (state) => ({
    ...state,
    loading: true,      // On active le loading
    error: null         // On réinitialise l'erreur
  })),
  
  // Quand on reçoit la citation avec succès
  on(loadQuoteSuccess, (state, { quote }) => ({
    ...state,
    quote: quote,       // On stocke la citation
    loading: false,     // On désactive le loading
    error: null
  })),
  
  // Quand il y a une erreur
  on(loadQuoteFailure, (state, { error }) => ({
    ...state,
    quote: null,
    loading: false,     // On désactive le loading
    error: error        // On stocke l'erreur
  }))
);
