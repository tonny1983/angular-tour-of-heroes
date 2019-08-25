import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {observe} from 'rxjs-observe';

@Injectable()
export class GlobalProcessSpinnerService {
  isLoading = new Subject<boolean>();
  private instance = {count: 0};
  private proxy$;

  constructor() {
    const { observables, proxy } = observe(this.instance);
    this.proxy$ = proxy;
    observables.count.subscribe(s => {
      if (s === 0) {
        this.isLoading.next(false);
      }
    });
  }

  show() {
    this.isLoading.next(true);
    this.proxy$.count += 1;
  }

  hide() {
    this.proxy$.count -= 1;
  }
}
