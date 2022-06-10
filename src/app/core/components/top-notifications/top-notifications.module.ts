import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNotificationsComponent} from './top-notifications.component';
import {TopNotificationItemComponent} from './components/top-notification-item/top-notification-item.component';
import {StoreModule} from '@ngrx/store';
import {TopNotificationsReducer} from './store/top-notifications.reducer';

@NgModule({
  declarations: [
    TopNotificationsComponent,
    TopNotificationItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TopNotificationsReducer)
  ],
  exports: [
    TopNotificationsComponent
  ]
})
export class TopNotificationsModule {
}
