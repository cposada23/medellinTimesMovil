import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarNoticiaPage } from './editar-noticia';

@NgModule({
  declarations: [
    EditarNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarNoticiaPage),
  ],
  exports: [
    EditarNoticiaPage
  ]
})
export class EditarNoticiaPageModule {}
