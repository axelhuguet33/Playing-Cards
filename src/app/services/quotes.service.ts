import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';

export interface Quote {
  id: number;
  quote: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiUrl = 'https://dummyjson.com/quotes';

  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<Quote> {
    // Génère un ID aléatoire entre 1 et 100
    const randomId = Math.floor(Math.random() * 100) + 1;
    return this.http.get<Quote>(`${this.apiUrl}/${randomId}`).pipe(
      delay(1000) // Simule un délai réseau pour voir le loading
    );
  }
}
