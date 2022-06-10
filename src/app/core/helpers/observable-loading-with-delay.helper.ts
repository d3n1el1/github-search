import {combineLatest, distinctUntilChanged, map, Observable, skip, startWith, takeWhile, timer} from 'rxjs';

export function observableLoadingWithDelay<T>(
  data$: Observable<T>,
  delay: number = 1000,
  duration: number = 1000
): Observable<T | null> {
  const loading$ = timer(delay, duration).pipe(
    map(i => !i),
    takeWhile<boolean>(Boolean, true),
    startWith(false),
  )

  return combineLatest([
    data$.pipe(startWith(null)),
    loading$,
  ]).pipe(
    takeWhile(([data, loading]) => !data || loading, true),
    map(([data, loading]) => loading ? null : data),
    skip(1),
    distinctUntilChanged(),
  );
}
