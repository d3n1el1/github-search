import {createSelector} from '@ngrx/store';
import {SearchPageState, searchPageStoreKey} from './search-page.reducer';

const selectSearchState = (state: any) => state[searchPageStoreKey];

export const selectRepositoryItems = createSelector(
  selectSearchState,
  (state: SearchPageState) => state.repositories
);

export const selectIsRepositoriesListLoading = createSelector(
  selectSearchState,
  (state: SearchPageState) => state.loading
);
