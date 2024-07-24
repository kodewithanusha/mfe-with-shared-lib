import { NgModule } from '@angular/core';
import { AdminViewComponent } from './admin-view.component';
import { MaskComponent } from './mask/mask.component';

@NgModule({
  declarations: [AdminViewComponent, MaskComponent],
  imports: [],
  exports: [AdminViewComponent, MaskComponent],
})
export class AdminViewModule {}
