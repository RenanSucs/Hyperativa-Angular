import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { PromocaoService } from './promocao.service';
import { MecanicaComponent } from './mecanica/mecanica.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    DestaqueComponent,
    MecanicaComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [PromocaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
