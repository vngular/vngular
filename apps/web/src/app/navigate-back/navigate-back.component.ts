import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { VngNavigateBackModule } from '@vngular/navigate-back';

@Component({
  standalone: true,
  imports: [RouterModule, VngNavigateBackModule],
  selector: 'vng-navigate-back',
  templateUrl: './navigate-back.component.html',
  styleUrls: ['./navigate-back.component.scss']
})
export class NavigateBackComponent {}
