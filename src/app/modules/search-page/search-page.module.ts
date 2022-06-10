import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPageComponent} from './search-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchFieldModule} from './components/search-field/search-field.module';
import {SearchListModule} from './components/search-list/search-list.module';
import {SearchPageService} from './services/search-page.service';
import {StoreModule} from '@ngrx/store';
import {SearchPageReducer} from './store/search-page.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SearchPageEffects} from './store/search-page.effects';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchPageComponent
  }
];

@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchFieldModule,
    SearchListModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(SearchPageReducer),
    EffectsModule.forFeature([SearchPageEffects])
  ],
  providers: [SearchPageService]
})
export class SearchPageModule {
}
