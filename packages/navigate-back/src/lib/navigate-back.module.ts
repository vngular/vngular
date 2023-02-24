import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VngNavigateBackDirective } from './navigate-back.directive';
import { VngNavigateBackService } from './navigate-back.service';

@NgModule({
  declarations: [VngNavigateBackDirective],
  imports: [CommonModule],
  providers: [VngNavigateBackService],
  exports: [VngNavigateBackDirective]
})
export class VngNavigateBackModule {}
