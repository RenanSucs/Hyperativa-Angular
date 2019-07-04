import { Component, OnInit, Input } from '@angular/core';

import { PromocaoService } from '../promocao.service';
import { Promocao } from '../promocao';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {
  
  @Input() promocoes: Promocao[] = []


  constructor(private PromocaoService: PromocaoService) { }

  ngOnInit() {

      this.PromocaoService.listar()
        .subscribe(dados => {
        this.promocoes = dados
        console.log(this.promocoes)});
  }

 
}

/* 

  promotionTitle: string;
  promotionHighlightTitle: string;
  
this.PromocaoService.listar()
      .subscribe(dados => {
        this.promotionTitle = dados[0].title;
      });

      this.PromocaoService.listar()
      .subscribe(dados => {
        this.promotionHighlightTitle = dados[0].highlightTitle;
      });*/ 
/*ngOnInit() {

  this.PromocaoService.listar()
    .subscribe(dados => {
      console.log(dados[1].faq[1].question)
      this.promocoes = dados});
}*/
