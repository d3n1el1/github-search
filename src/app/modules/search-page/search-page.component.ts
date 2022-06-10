import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SearchPageService} from './services/search-page.service';
import {RepositoryItemModel} from './models/search-results.model';
import {map, Observable, repeat, startWith, Subject, switchMap, take, takeUntil} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SearchPageState} from './store/search-page.reducer';
import {select, Store} from '@ngrx/store';
import {selectIsRepositoriesListLoading, selectRepositoryItems} from './store/search-page.selectors';
import {ClearSearchPageAction, SearchRepositoriesByQueryAction} from './store/search-page.actions';
import {SearchFieldModel} from './models/search-field.model';
import {observableLoadingWithDelay} from '../../core/helpers/observable-loading-with-delay.helper';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {

  query!: string;
  isValid!: boolean;
  searchList$!: Observable<RepositoryItemModel[] | null>;
  isLoading$!: Observable<boolean>;

  private loadDataDebounce$ = new Subject<void>();
  private cancelDataDebounce$ = new Subject<void>();

  isLoadingDataWithDebounce$ = this.loadDataDebounce$.pipe(
    switchMap(() => observableLoadingWithDelay(this.store$.pipe(select(selectRepositoryItems)))),
    map(value => !value),
    startWith(false),
    takeUntil(this.cancelDataDebounce$),
    repeat()
  );

  constructor(private searchPageService: SearchPageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private store$: Store<SearchPageState>) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(take(1))
      .subscribe((query: Params) => {
        this.query = query['query'];
      });

    this.searchList$ = this.store$.select(selectRepositoryItems);

    this.isLoading$ = this.store$.select(selectIsRepositoriesListLoading);
  }

  searchValue({value, isValid}: SearchFieldModel): void {
    this.query = value;
    this.isValid = isValid;

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {query: value},
      queryParamsHandling: 'merge'
    });

    if (isValid) {
      this.store$.dispatch(SearchRepositoriesByQueryAction({query: value}));
      this.loadDataDebounce$.next();
    } else {
      this.store$.dispatch(ClearSearchPageAction());
    }
  }

}
