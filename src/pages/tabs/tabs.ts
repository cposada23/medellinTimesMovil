import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
@IonicPage({
  name: 'Tabs'
})
export class TabsPage {

  noticiasRoot = 'NoticiasPage'
  publicidadRoot = 'PublicidadPage'
  eventosRoot = 'EventosPage'


  constructor(public navCtrl: NavController) {}

}
