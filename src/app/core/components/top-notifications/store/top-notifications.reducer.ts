import {createFeature, createReducer, on} from '@ngrx/store';
import {TopNotificationItemModel} from '../models/top-notification-item.model';
import {AddNewNotificationItem, RemoveNotificationItem} from './top-notifications.actions';

export const topNotificationsStoreKey = 'topNotifications';

export interface TopNotificationsState {
  notifications: TopNotificationItemModel[];
}

const initialState: TopNotificationsState = {
  notifications: []
};

export const TopNotificationsReducer = createFeature({
  name: topNotificationsStoreKey,
  reducer: createReducer(
    initialState,
    on(AddNewNotificationItem, (state: TopNotificationsState, {notificationItem}: { notificationItem: TopNotificationItemModel }) => ({
      ...state,
      notifications: [
        ...state.notifications,
        notificationItem
      ]
    })),
    on(RemoveNotificationItem, (state: TopNotificationsState, {notificationId}: { notificationId: string }) => ({
      ...state,
      notifications: state.notifications.filter((notification: TopNotificationItemModel) => notification.id !== notificationId)
    }))
  )
});
