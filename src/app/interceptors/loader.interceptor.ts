import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalProcessSpinnerService} from '../services/global-process-spinner.service';
import {finalize} from 'rxjs/operators';
import {log} from 'util';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.has(InterceptorSkipHeader)) {
      log('has');
      const headers = req.headers.delete(InterceptorSkipHeader);
      return next.handle(req.clone({ headers }));
    } else {
      log('none');
      this.service.show();
      return next.handle(req).pipe(
        finalize(() => {
          this.service.hide();
        })
      );
    }
  }

  constructor(public service: GlobalProcessSpinnerService) { }
}
