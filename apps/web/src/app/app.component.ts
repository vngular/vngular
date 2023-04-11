import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { VngNavigateBackModule } from '@vngular/navigate-back';

@Component({
  standalone: true,
  imports: [RouterModule, VngNavigateBackModule],
  selector: 'vng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
