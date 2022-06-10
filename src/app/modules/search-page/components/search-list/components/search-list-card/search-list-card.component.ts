import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {RepositoryItemModel} from '../../../../models/search-results.model';

@Component({
  selector: 'app-search-list-card',
  templateUrl: './search-list-card.component.html',
  styleUrls: ['./search-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchListCardComponent {

  @Input() repositoryCard!: RepositoryItemModel;

}
