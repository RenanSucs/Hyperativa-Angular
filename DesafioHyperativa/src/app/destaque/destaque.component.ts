import { Component, OnInit } from '@angular/core';

import { PromocaoService } from '../promocao.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {

  promocoes: any[] = [];

  constructor(private PromocaoService: PromocaoService) { }

  ngOnInit() {

    this.PromocaoService.listar()
      .subscribe(dados => {
        console.log(dados[1].faq[1].question)
        this.promocoes = dados});
  }

}
