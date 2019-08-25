import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class GlobalProcessSpinnerService {
  isLoading = new Subject<boolean>();

  constructor() { }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
