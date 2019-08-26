import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {log} from 'util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private readonly httpClientWithoutInterceptor: HttpClient;

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private handler: HttpBackend
  ) { this.httpClientWithoutInterceptor = new HttpClient(handler); }

  public heroesUrl = 'api/heroes';

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number, withoutInterceptor: boolean = false): Observable<Hero> {
    const client = withoutInterceptor ? this.httpClientWithoutInterceptor : this.http;
    const url = `${this.heroesUrl}/${id}`;
    return client.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  getHeroes(withoutInterceptor: boolean = false): Observable<Hero[]> {
    const client: HttpClient = withoutInterceptor ? this.httpClientWithoutInterceptor : this.http;
    withoutInterceptor ? log('1') : log('2');
    return  client.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero, withoutInterceptor: boolean = false): Observable<Hero> {
    const client = withoutInterceptor ? this.httpClientWithoutInterceptor : this.http;
    return client.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  updateHero(hero: Hero, withoutInterceptor: boolean = false): Observable<any> {
    const client = withoutInterceptor ? this.httpClientWithoutInterceptor : this.http;
    return client.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number, withoutInterceptor: boolean = false): Observable<Hero> {
    const client = withoutInterceptor ? this.httpClientWithoutInterceptor : this.http;
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return client.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string, withoutInterceptor: boolean = false): Observable<Hero[]> {
    const client = withoutInterceptor ? this.httpClientWithoutInterceptor : this.http;
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return client.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
