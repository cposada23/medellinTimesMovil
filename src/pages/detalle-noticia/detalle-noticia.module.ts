import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleNoticiaPage } from './detalle-noticia';

@NgModule({
  declarations: [
    DetalleNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleNoticiaPage),
  ],
  exports: [
    DetalleNoticiaPage
  ]
})
export class DetalleNoticiaPageModule {}
