import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class VngNavigateBackService {
  constructor(private router: Router, private location: Location) {}

  navigateBack(): Observable<void> {
    return of().pipe(
      tap(() => {
        if (this.router.navigated) {
          this.location.back();
        } else {
          throw new Error();
        }
      })
    );
  }
}
