import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {TopNotificationsState} from '../components/top-notifications/store/top-notifications.reducer';
import {Store} from '@ngrx/store';
import {AddNewNotificationItem} from '../components/top-notifications/store/top-notifications.actions';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private store$: Store<TopNotificationsState>) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(({error}: any) => {
        this.store$.dispatch(AddNewNotificationItem({
          notificationItem: {
            id: (Math.random() * 1000000).toString(),
            message: error.message
          }
        }));
        return throwError(error);
      })
    );
  }
}
