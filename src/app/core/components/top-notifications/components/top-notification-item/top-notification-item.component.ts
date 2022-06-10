import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TopNotificationItemModel} from '../../models/top-notification-item.model';
import {TopNotificationsState} from '../../store/top-notifications.reducer';
import {Store} from '@ngrx/store';
import {take, tap, timer} from 'rxjs';
import {RemoveNotificationItem} from '../../store/top-notifications.actions';

@Component({
  selector: 'app-top-notification-item',
  templateUrl: './top-notification-item.component.html',
  styleUrls: ['./top-notification-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNotificationItemComponent implements OnInit {

  @Input() notification!: TopNotificationItemModel;

  constructor(private store$: Store<TopNotificationsState>) {
  }

  ngOnInit(): void {
    timer(3000).pipe(
      tap(() => this.store$.dispatch(RemoveNotificationItem({notificationId: this.notification.id}))),
      take(1)
    ).subscribe();
  }

}
