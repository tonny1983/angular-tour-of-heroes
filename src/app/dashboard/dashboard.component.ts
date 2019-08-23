import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(h => this.heroes = h.slice(1, 5));
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
