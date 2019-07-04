import { Component, OnInit, Input } from '@angular/core';

import { Promocao } from '../promocao';
import { PromocaoService } from '../promocao.service';

@Component({
  selector: 'app-mecanica',
  templateUrl: './mecanica.component.html',
  styleUrls: ['./mecanica.component.css']
})
export class MecanicaComponent implements OnInit {

  promocoes: Promocao[] = []
  
  url = '';
  description = 'Imagem Calendário';

  constructor(private PromocaoService: PromocaoService) { }

  ngOnInit() {

        this.PromocaoService.listar()
        .subscribe(dados => {
        this.promocoes = dados
        });

        this.PromocaoService.listar()
        .subscribe(dados => {
          this.url = dados[0].calendarPeriod;
        });
        
  }

}
