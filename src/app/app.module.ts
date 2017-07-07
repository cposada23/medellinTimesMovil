import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoticiasProvider } from '../providers/noticias/noticias';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthProvider } from '../providers/auth/auth';
import { EventosProvider } from '../providers/eventos/eventos';
import { PublicidadProvider } from '../providers/publicidad/publicidad';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasProvider,
    AuthProvider,
    EventosProvider,
    PublicidadProvider
  ]
})
export class AppModule {}
