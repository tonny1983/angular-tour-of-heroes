import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalProcessSpinnerService} from '../services/global-process-spinner.service';
import {finalize} from 'rxjs/operators';
import {log} from 'util';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.search('name=') === -1) {
      this.service.show();
      return next.handle(req).pipe(
        finalize(() => {
          this.service.hide();
        })
      );
    } else {
      return next.handle(req);
    }
  }

  constructor(public service: GlobalProcessSpinnerService) { }
}
