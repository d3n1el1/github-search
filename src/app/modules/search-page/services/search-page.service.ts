import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../core/services/api.service';
import {SearchResultsModel} from '../models/search-results.model';

@Injectable()
export class SearchPageService {

  constructor(private apiService: ApiService) {
  }

  getRepositoriesByQuery(query: string): Observable<SearchResultsModel> {
    return this.apiService.get<SearchResultsModel>('/repositories', {params: {q: query, per_page: 20}});
  }

}
