import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private term = new Subject<string>();

  search(term: string): void {
    this.term.next(term);
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.term.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((t: string) => this.heroService.searchHeroes(t, true)),
    );
  }

}
