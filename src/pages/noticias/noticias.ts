import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NoticiasProvider } from '../../providers/noticias/noticias';
import { DetalleNoticiaPage } from '../detalle-noticia/detalle-noticia';
/**
 * Generated class for the NoticiasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias:Array<any>;
  loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private noticiasProvider: NoticiasProvider, private loadingController:LoadingController) {
    // this.presentLoading();
    // this.noticiasProvider.getNoticias().subscribe(noticias => {
    //   console.log("noticias", noticias);
    //   this.noticias = noticias;
    //   this.loading.dismiss();
    // }, error => {
    //   this.loading.dismiss();
    //   console.error('error', error);
    // });
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    this.presentLoading();
    this.noticiasProvider.getNoticias().subscribe(noticias => {
      console.log("noticias", noticias);
      this.noticias = noticias;
      this.loading.dismiss();
    }, error => {
      this.loading.dismiss();
      console.error('error', error);
    });
  }

  /** Ir al detalle de una noticia, se recibe el ID */
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
