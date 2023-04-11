import { Directive, HostListener, Input, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { VngNavigateBackParms } from './navigate-back.interfaces';
import { VngNavigateBackService } from './navigate-back.service';

@Directive({
  selector: '[vngNavigateBack]'
})
export class VngNavigateBackDirective implements OnDestroy {
  @Input()
  set vngNavigateBack(params: VngNavigateBackParms) {
    this.params = params;
  }

  private params?: VngNavigateBackParms;
  private destroySubject$ = new Subject<void>();
  constructor(private service: VngNavigateBackService) {}

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  @HostListener('click', ['$event.target'])
  onClick() {
    this.service
      .navigateBack()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe({
        error: () => {
          console.log('no se puede', this.params);
        }
      });
  }
}
