import {createFeature, createReducer, on} from '@ngrx/store';
import {
  ClearSearchPageAction,
  SearchRepositoriesByQueryAction,
  SearchRepositoriesByQueryErrorAction,
  SearchRepositoriesByQuerySuccessAction
} from './search-page.actions';
import {RepositoryItemModel, SearchResultsModel} from '../models/search-results.model';

export const searchPageStoreKey = 'searchPage';

export interface SearchPageState {
  repositories: RepositoryItemModel[] | null;
  totalCount: number;
  loading: boolean;
  incompleteResults: boolean;
}

const initialState: SearchPageState = {
  repositories: [],
  totalCount: 0,
  loading: false,
  incompleteResults: true
};

export const SearchPageReducer = createFeature({
  name: searchPageStoreKey,
  reducer: createReducer(
    initialState,
    on(SearchRepositoriesByQueryAction, (state: SearchPageState) => ({...state, loading: true, repositories: null})),
    on(SearchRepositoriesByQuerySuccessAction, (state: SearchPageState, {response}: {response: SearchResultsModel}) => ({
      ...state,
      loading: false,
      repositories: response.items || [],
      totalCount: response.total_count,
      incompleteResults: response.incomplete_results
    })),
    on(SearchRepositoriesByQueryErrorAction, (state: SearchPageState) => ({...initialState})),
    on(ClearSearchPageAction, (state: SearchPageState) => ({...initialState})),
  )
});
