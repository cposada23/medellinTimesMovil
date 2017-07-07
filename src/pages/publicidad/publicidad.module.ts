import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicidadPage } from './publicidad';

@NgModule({
  declarations: [
    PublicidadPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicidadPage),
  ],
  exports: [
    PublicidadPage
  ]
})
export class PublicidadPageModule {}
