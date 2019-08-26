import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {NgxSpinnerService} from 'ngx-spinner';
import {GlobalProcessSpinnerService} from '../services/global-process-spinner.service';

@Component({
  selector: 'app-hero-dropdown',
  templateUrl: './hero-dropdown.component.html',
  styleUrls: ['./hero-dropdown.component.css']
})
export class HeroDropdownComponent implements OnInit {

  heroes: Hero[] = [];

  getHeroes(): void {
    this.spinner.show('dropdown-spinner');
    this.heroService.getHeroes(true).subscribe(h => {
      this.heroes = h.slice(1, 5);
      this.spinner.hide('dropdown-spinner');
    });
  }

  constructor(private heroService: HeroService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {}


}
