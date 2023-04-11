import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  forwardRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'vng-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VngStarRatingComponent),
      multi: true
    }
  ]
})
export class VngStarRatingComponent implements OnChanges, ControlValueAccessor {
  @Input() emptyTemplateRef?: TemplateRef<unknown>;
  @Input() filledTemplateRef?: TemplateRef<unknown>;
  @Input() length = 5;

  isDisabled = false;
  value = 0;
  stars = [1, 2, 3, 4, 5];

  constructor(
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['length']) {
      const length = changes['length'].currentValue;
      this.stars = Array(length)
        .fill(null)
        .map((_, i) => i + 1);
    }
  }

  onSelectRating(star: number): void {
    this.value = this.length < star ? this.length : star;
    this.onChange(this.value);
    this.cdr.markForCheck();
  }

  writeValue(star: number): void {
    this.value = star;
    this.cdr.markForCheck();
  }

  protected setProperty(key: string, value: unknown): void {
    this.renderer.setProperty(this.elementRef.nativeElement, key, value);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange(value: number): void {
    return;
  }

  registerOnChange(onChange: (_: number | null) => void): void {
    this.onChange = onChange;
  }

  onTouched(): void {
    return;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.cdr.markForCheck();
  }
}
