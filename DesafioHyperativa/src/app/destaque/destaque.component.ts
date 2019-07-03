import { Component, OnInit } from '@angular/core';

import { PromocaoService } from '../promocao.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {

  promocoes: Array<any>;

  constructor(private PromocaoService: PromocaoService) { }

  ngOnInit() {

    this.listar();
  }

  listar(){

    this.PromocaoService.listar().subscribe(dados => this.promocoes = dados);
  }

}
