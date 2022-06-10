import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TopNotificationItemModel} from './models/top-notification-item.model';
import {TopNotificationsState} from './store/top-notifications.reducer';
import {Store} from '@ngrx/store';
import {getTopNotificationsList} from './store/top-notifications.selectors';

@Component({
  selector: 'app-top-notifications',
  templateUrl: './top-notifications.component.html',
  styleUrls: ['./top-notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNotificationsComponent implements OnInit {

  notifications$!: Observable<TopNotificationItemModel[]>;

  constructor(private store$: Store<TopNotificationsState>) {
  }

  ngOnInit(): void {
    this.notifications$ = this.store$.select(getTopNotificationsList);
  }

}
