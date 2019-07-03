import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { PromocaoService } from './promocao.service';

@NgModule({
  declarations: [
    AppComponent,
    DestaqueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PromocaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
