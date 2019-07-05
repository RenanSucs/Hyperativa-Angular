import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { DestaqueComponent } from './components/destaque/destaque.component';
import { PromocaoService } from './promocao.service';
import { MecanicaComponent } from './components/mecanica/mecanica.component';
import { FaqComponent } from './components/faq/faq.component';
import { ComprouGanhouComponent } from './comprou-ganhou/comprou-ganhou.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    DestaqueComponent,
    MecanicaComponent,
    FaqComponent,
    ComprouGanhouComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
    
  ],
  providers: [PromocaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
