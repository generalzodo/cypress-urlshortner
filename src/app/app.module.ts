import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { urlReducer } from './store/urls.reducer';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlEffects } from './store/urls.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ urls: urlReducer }),
    EffectsModule.forRoot([UrlEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
