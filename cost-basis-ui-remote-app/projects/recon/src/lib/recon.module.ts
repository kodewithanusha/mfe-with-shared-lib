import { NgModule } from '@angular/core';
import { ReconComponent } from './recon.component';
import { DodComponent } from './dod/dod.component';

@NgModule({
  declarations: [ReconComponent, DodComponent],
  imports: [],
  exports: [ReconComponent, DodComponent],
})
export class ReconModule {}
