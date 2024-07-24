import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaskComponent } from 'admin-view';
import { DodComponent } from 'recon';

const routes: Routes = [
  { path: 'dod', component: DodComponent },
  { path: 'mask', component: MaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstRoutingModule {}
