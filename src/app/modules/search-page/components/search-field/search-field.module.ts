import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchFieldComponent} from './search-field.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchFieldErrorMessageComponent } from './components/search-field-error-message/search-field-error-message.component';

@NgModule({
  declarations: [SearchFieldComponent, SearchFieldErrorMessageComponent],
  exports: [SearchFieldComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SearchFieldModule {
}
