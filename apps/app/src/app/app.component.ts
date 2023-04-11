import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { VngStarRatingComponent } from 'packages/star-rating/src';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, VngStarRatingComponent],
  selector: 'vng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = this.fb.group({
    rating: [3]
  });

  constructor(private fb: FormBuilder) {}
}
