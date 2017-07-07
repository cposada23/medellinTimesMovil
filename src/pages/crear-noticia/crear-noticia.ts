import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NoticiasProvider } from '../../providers/noticias/noticias';
/**
 * Generated class for the CrearNoticiaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'NuevaNoticia'
})
@Component({
  selector: 'page-crear-noticia',
  templateUrl: 'crear-noticia.html',
})
export class CrearNoticiaPage {
  private form: FormGroup;
  loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private noticiasProvider: NoticiasProvider) {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      texto: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
  }


  crearNoticia() {
    console.log("value", this.form.value)
    this.noticiasProvider.crearNoticia(this.form.value).subscribe(res => {
      console.log("res", res);
    }, error => {
      console.error('error', error);
    });
  }



}
