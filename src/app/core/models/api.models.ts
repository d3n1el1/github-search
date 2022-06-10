import {HttpParams} from '@angular/common/http';

export interface GetApiOptions {
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
}
