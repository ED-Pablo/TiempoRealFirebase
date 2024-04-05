import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"tiemporealfirebase","appId":"1:420841232227:web:670bd37d6d47ae8975e556","databaseURL":"https://tiemporealfirebase-default-rtdb.firebaseio.com","storageBucket":"tiemporealfirebase.appspot.com","apiKey":"AIzaSyAeb1168ZPf6VYRVLhw7S5EG3P_bjoM2_Y","authDomain":"tiemporealfirebase.firebaseapp.com","messagingSenderId":"420841232227"})), provideDatabase(() => getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
