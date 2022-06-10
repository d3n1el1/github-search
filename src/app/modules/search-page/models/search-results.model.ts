import {BaseDtoModel} from '../../../core/models/base-dto.model';

export interface RepositoryItemModel extends BaseDtoModel {
  full_name: string;
  svn_url: string;
  stargazers_count: number;
  description?: string;
}

export interface SearchResultsModel {
  items: RepositoryItemModel[];
  total_count: number;
  incomplete_results: boolean;
}
