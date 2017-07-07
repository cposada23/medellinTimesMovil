import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PublicidadProvider } from '../../providers/publicidad/publicidad';

/**
 * Generated class for the PublicidadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-publicidad',
  templateUrl: 'publicidad.html',
})
export class PublicidadPage {
  loading:any;
  publicidades:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private publicidadProvider: PublicidadProvider, private loadingController:LoadingController) {

    this.presentLoading();
    this.publicidadProvider.getPublicidad().subscribe(publicidades => {
      console.log("publicidad ", publicidades);
      this.publicidades = publicidades;
      this.loading.dismiss();
    }, error => {
      this.loading.dismiss();
      console.error('error', error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicidadPage');
  }

  irDetalle(noticia) {
    this.navCtrl.push('DetalleNoticia', {
      id: noticia
    });
  }

  nuevaNoticia() {
    this.navCtrl.push('NuevaNoticia');
  }

  presentLoading() {
    this.loading = this.loadingController.create({
      content: 'Esperando las noticias'
    });
    this.loading.present();
  }


}
