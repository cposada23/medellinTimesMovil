import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { NoticiasProvider } from '../../providers/noticias/noticias';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the DetalleNoticiaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'DetalleNoticia'
})
@Component({
  selector: 'page-detalle-noticia',
  templateUrl: 'detalle-noticia.html',
})
export class DetalleNoticiaPage {
  noticia: object;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private noticiasProvider: NoticiasProvider, private popoverController: PopoverController,
              private authProvider: AuthProvider, private alertController: AlertController) {
  }

  ionViewDidLoad() {
    let id = this.navParams.get('id');
    this.noticiasProvider.getNoticiaPorId(id).subscribe(noticia => {
      this.noticia = noticia;
    }, error => {
      console.log(error);
    });
  }

  eliminar(noticia) {
    this.noticiasProvider.deleteNoticia(this.noticia['id']).subscribe(res => {
      this.showAlert('Noticia eliminada', '');
      this.navCtrl.pop();
    }, error => {
      this.showAlert('Error', 'No se pudo eliinar la noticia');
    });
  }

  editar() {
    this.navCtrl.push('EditarNoticia', {
      id: this.noticia['id']
    });
  }

  showAlert(title: string, error: string) {
    let alert = this.alertController.create({
      title: title,
      subTitle: error,
      buttons: ['OK']
    })
    alert.present();
  }
}

