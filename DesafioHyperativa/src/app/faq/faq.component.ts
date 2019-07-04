import { Component, OnInit } from '@angular/core';

import { PromocaoService } from '../promocao.service';
import { Promocao } from '../promocao';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit {

  promocoes: Promocao[] = [];

  constructor(private PromocaoService: PromocaoService) { }

  ngOnInit() {

    this.PromocaoService.listar()
      .subscribe(dados => this.promocoes = dados);
  }

}
