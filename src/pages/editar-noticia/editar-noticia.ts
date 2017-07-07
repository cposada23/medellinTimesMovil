import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NoticiasProvider } from '../../providers/noticias/noticias';
/**
 * Generated class for the EditarNoticiaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'EditarNoticia'
})
@Component({
  selector: 'page-editar-noticia',
  templateUrl: 'editar-noticia.html',
})
export class EditarNoticiaPage {
  private form: FormGroup;
  noticia: object = {};
  loading:any;
  constructor(private formBuilder:FormBuilder, private loadingController: LoadingController, private noticiasProvider: NoticiasProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.form = this.formBuilder.group({
      titulo: [ '' || this.noticia['titulo'], Validators.required],
      descripcion: [  '' || this.noticia['descripcion'], Validators.required],
      texto:  ['' || this.noticia['texto'], Validators.required],
    });
  }

  ngOnInit(): void {
    this.presentLoading();
    let id = this.navParams.get('id');
    this.noticiasProvider.getNoticiaPorId(id).subscribe(noticia => {
      this.noticia = noticia;
      this.form['titulo'] = this.noticia['titulo'];
      this.form.setValue({
        'titulo': this.noticia['titulo'],
        'descripcion': this.noticia['descripcion'],
        'texto': this.noticia['texto']
      });
      console.log("this.noticia", this.noticia);
      this.loading.dismiss();
    }, error => {
      this.loading.dismiss();
    });
  }

  ionViewDidLoad() { }

  crearNoticia() {
    console.log("value", this.form.value)
    this.noticiasProvider.editarNoticia(this.form.value, this.noticia['id']).subscribe(res => {
      console.log("res", res);
      let id = res['id'];
      this.navCtrl.push('DetalleNoticia', {
        id: id
      });

    }, error => {
      console.error('error', error);
    });
  }

  presentLoading() {
    this.loading = this.loadingController.create({
      content: 'trabajando...'
    });

    this.loading.present();
  }

}
