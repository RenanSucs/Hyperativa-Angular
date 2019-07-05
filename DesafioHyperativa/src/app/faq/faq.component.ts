import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { PromocaoService } from '../promocao.service';
import { Promocao } from '../promocao';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations:[
    trigger('hideAnswerAnimation0', [
      state('small0', style({ height: '0px'})),
      state('large0', style({ height: '120px'})),

      transition('small0 <=> large0', animate('200ms ease-in'))
    ]),
    trigger('hideAnswerAnimation1', [
      state('small1', style({ height: '0px'})),
      state('large1', style({ height: '40px'})),

      transition('small1 <=> large1', animate('200ms ease-in'))
    ]),
    trigger('hideAnswerAnimation2', [
      state('small2', style({ height: '0px'})),
      state('large2', style({ height: '40px'})),

      transition('small2 <=> large2', animate('200ms ease-in'))
    ]),
    trigger('rowAnimation',[
      state('hide', style({ transform: 'rotateZ(0deg)'})),
      state('show', style({ transform: 'rotateZ(90deg)'})),

      transition('hide <=> show', animate('200ms ease-in'))
    ])
  ]
})

export class FaqComponent implements OnInit {

  stateAnswer0: string = 'small0';
  stateRow0: string = 'hide';

  stateAnswer1: string = 'small1';
  stateRow1: string = 'hide';

  stateAnswer2: string = 'small2';
  stateRow2: string = 'hide';

  animation0(){

    this.stateAnswer0 = (this.stateAnswer0 === 'small0' ? 'large0' : 'small0');
    this.stateRow0 = (this.stateRow0 === 'hide' ? 'show' : 'hide');
  }

  animation1(){

    this.stateAnswer1 = (this.stateAnswer1 === 'small1' ? 'large1' : 'small1');
    this.stateRow1 = (this.stateRow1 === 'hide' ? 'show' : 'hide');
  }

  animation2(){

    this.stateAnswer2 = (this.stateAnswer2 === 'small2' ? 'large2' : 'small2');
    this.stateRow2 = (this.stateRow2 === 'hide' ? 'show' : 'hide');
  }

  promocoes: Promocao[] = [];

  constructor(private PromocaoService: PromocaoService) { }

  ngOnInit() {

    this.PromocaoService.listar()
      .subscribe(dados => this.promocoes = dados);
  }

}
