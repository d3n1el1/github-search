import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-search-field-error-message',
  templateUrl: './search-field-error-message.component.html',
  styleUrls: ['./search-field-error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFieldErrorMessageComponent {

  @Input() set errors(value: ValidationErrors) {
    this.errorsList = Object.keys(value).map((errorKey: string) => {
      let message = this.validationErrorMessages[errorKey];

      if (typeof value[errorKey] === 'object') {
        Object.keys(value[errorKey]).forEach((paramKey: string) => {
          message = message.replace(`{${paramKey}}`, value[errorKey][paramKey]);
        });
      }

      return message;
    });
    this.cdr.markForCheck();
  }

  errorsList: string[] = [];

  private readonly validationErrorMessages: { [key: string]: string } = {
    required: 'This field is required',
    minlength: 'The entered value should be at least {requiredLength} characters',
    maxlength: 'The entered value should be no longer than {requiredLength} characters'
  };

  constructor(private cdr: ChangeDetectorRef) {
  }

}
