import {createAction, props} from '@ngrx/store';
import {SearchResultsModel} from '../models/search-results.model';

export const SearchRepositoriesByQueryAction = createAction(
  '[Search Page] Search Repositories',
  props<{query: string}>()
);

export const SearchRepositoriesByQuerySuccessAction = createAction(
  '[Search Page] Search Repositories Success',
  props<{response: SearchResultsModel}>()
);

export const SearchRepositoriesByQueryErrorAction = createAction('[Search Page] Search Repositories Error');

export const ClearSearchPageAction = createAction('[Search Page] Clear Search Page');
