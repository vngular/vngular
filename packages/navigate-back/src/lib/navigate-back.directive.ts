import { Directive, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { VngNavigateBackParms } from './navigate-back.interfaces';

@Directive({
  selector: '[vngNavigateBack]'
})
export class VngNavigateBackDirective implements OnDestroy {
  @Input()
  set vngNavigateBack(params: VngNavigateBackParms) {
    this.params = params;
    this.canNavigateBack = this.router.navigated;
  }

  canNavigateBack = false;

  private params?: VngNavigateBackParms;
  private destroySubject$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
