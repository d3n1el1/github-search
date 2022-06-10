import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListComponent } from './search-list.component';
import { SearchListCardComponent } from './components/search-list-card/search-list-card.component';



@NgModule({
    declarations: [
        SearchListComponent,
        SearchListCardComponent
    ],
    exports: [
        SearchListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SearchListModule { }
