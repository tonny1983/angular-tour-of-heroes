import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalProcessSpinnerService} from '../services/global-process-spinner.service';
import {finalize} from 'rxjs/operators';
import {log} from 'util';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    log('1');
    this.service.show();
    log('2');
    return next.handle(req).pipe(
      finalize(() => {
        log('3');
        this.service.hide();
      })
    );
  }

  constructor(public service: GlobalProcessSpinnerService) { }
}
