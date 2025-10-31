import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { QuotesService } from './services/quotes.service';
import { loadQuote, loadQuoteSuccess, loadQuoteFailure } from './quotes.actions';

@Injectable()
export class QuotesEffects {
  private actions$ = inject(Actions);
  private quotesService = inject(QuotesService);

  loadQuote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuote),
      switchMap(() =>
        this.quotesService.getRandomQuote().pipe(
          map(quote => loadQuoteSuccess({ quote })),
          catchError(error => of(loadQuoteFailure({ 
            error: error.message || 'Une erreur est survenue' 
          })))
        )
      )
    )
  );
}