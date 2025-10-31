import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { counterReducer } from './counter.reducer';
import { quotesReducer } from './quotes.reducer';
import { QuotesEffects } from './quotes.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),                           // ⚡ Active HttpClient
    provideStore({ 
      count: counterReducer,                       // Notre compteur
      quotes: quotesReducer                        // Notre state de quotes
    }),
    provideEffects([QuotesEffects])                // ⚡ Enregistre les Effects
  ]
};
