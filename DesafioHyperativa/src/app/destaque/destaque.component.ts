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

