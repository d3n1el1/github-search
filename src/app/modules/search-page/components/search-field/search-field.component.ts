import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subscription} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import {SearchFieldModel} from '../../models/search-field.model';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFieldComponent implements OnInit, OnDestroy {

  @Input() value!: string;

  @Output() valueChange: EventEmitter<SearchFieldModel> = new EventEmitter<SearchFieldModel>();

  searchFieldControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(60)
  ]);

  private subscription!: Subscription;

  ngOnInit(): void {
    this.searchFieldControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      this.valueChange.emit({
        value,
        isValid: this.searchFieldControl.valid
      });
    });

    this.searchFieldControl.setValue(this.value);
  }

  resetValue(): void {
    this.searchFieldControl.reset();
    this.valueChange.emit({
      value: '',
      isValid: false
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
