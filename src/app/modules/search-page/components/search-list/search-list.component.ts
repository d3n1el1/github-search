import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RepositoryItemModel} from '../../models/search-results.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchListComponent {

  @Input() repositoriesList!: RepositoryItemModel[] | null;
  @Input() isLoading!: boolean | null;

  _trackByFn(index: number, item: RepositoryItemModel): string {
    return item?.id;
  }

}
