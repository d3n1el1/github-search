import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SearchPageService} from '../services/search-page.service';
import {
  SearchRepositoriesByQueryAction,
  SearchRepositoriesByQueryErrorAction,
  SearchRepositoriesByQuerySuccessAction
} from './search-page.actions';
import {catchError, map, switchMap, throwError} from 'rxjs';
import {SearchResultsModel} from '../models/search-results.model';
import {Store} from '@ngrx/store';

@Injectable()
export class SearchPageEffects {

  constructor(private actions$: Actions,
              private store$: Store,
              private searchPageService: SearchPageService) {
  }

  searchRepositories$ = createEffect(() => this.actions$.pipe(
    ofType(SearchRepositoriesByQueryAction),
    switchMap((action) => this.searchPageService.getRepositoriesByQuery(action.query).pipe(
      catchError((e) => {
        this.store$.dispatch(SearchRepositoriesByQueryErrorAction());
        return throwError(e);
      })
    )),
    map((response: SearchResultsModel) => SearchRepositoriesByQuerySuccessAction({response}))
  ));

}
