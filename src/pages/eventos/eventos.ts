import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventosProvider } from '../../providers/eventos/eventos';


@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  eventos:Array<any>;
  loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private eventosProvider: EventosProvider, private loadingController:LoadingController) {
    this.presentLoading();
    this.eventosProvider.getEventos().subscribe(noticias => {
      console.log("noticias", noticias);
      this.eventos = noticias;
      this.loading.dismiss();
    }, error => {
      this.loading.dismiss();
      console.error('error', error);
    });
  }

  ionViewDidLoad() { }


  presentLoading() {
    this.loading = this.loadingController.create({
      content: 'Buscando eventos'
    });
    this.loading.present();
  }


}
