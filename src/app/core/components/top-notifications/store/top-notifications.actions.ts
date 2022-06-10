import {createAction, props} from '@ngrx/store';
import {TopNotificationItemModel} from '../models/top-notification-item.model';

export const AddNewNotificationItem = createAction(
  '[Top Notification] Add notification',
  props<{notificationItem: TopNotificationItemModel}>()
);

export const RemoveNotificationItem = createAction(
  '[Top Notification] Remove notification',
  props<{notificationId: string}>()
);

