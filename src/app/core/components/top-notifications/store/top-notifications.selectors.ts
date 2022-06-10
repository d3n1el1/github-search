import {TopNotificationsState, topNotificationsStoreKey} from './top-notifications.reducer';
import {createSelector} from '@ngrx/store';

export const topNotificationsSelector = (state: any) => state[topNotificationsStoreKey];

export const getTopNotificationsList = createSelector(
  topNotificationsSelector,
  (state: TopNotificationsState) => state.notifications
);
